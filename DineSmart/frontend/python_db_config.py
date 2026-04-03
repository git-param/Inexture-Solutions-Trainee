from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
CORS(app)

# DB CONNECTION
def get_db_connection():
    return psycopg2.connect(
        host="localhost",
        database="dinesmart_db",
        user="postgres",
        password="your_password"
    )

# ==============================
# GET USER PROFILE
# ==============================
@app.route('/api/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("SELECT id, name, email FROM ds_users WHERE id = %s", (user_id,))
    user = cur.fetchone()

    cur.close()
    conn.close()

    if user:
        return jsonify({
            "id": user[0],
            "name": user[1],
            "email": user[2]
        })
    else:
        return jsonify({"error": "User not found"}), 404


# ==============================
# UPDATE PROFILE
# ==============================
@app.route('/api/update-profile', methods=['POST'])
def update_profile():
    data = request.json

    user_id = data.get("id")
    name = data.get("name")
    email = data.get("email")

    conn = get_db_connection()
    cur = conn.cursor()

    cur.execute("""
        UPDATE ds_users
        SET name = %s, email = %s
        WHERE id = %s
    """, (name, email, user_id))

    conn.commit()

    cur.close()
    conn.close()

    return jsonify({"message": "Profile updated successfully"})


# ==============================
# CHANGE PASSWORD
# ==============================
@app.route('/api/change-password', methods=['POST'])
def change_password():
    data = request.json

    user_id = data.get("id")
    current_password = data.get("currentPassword")
    new_password = data.get("newPassword")

    conn = get_db_connection()
    cur = conn.cursor()

    # check old password
    cur.execute("SELECT password FROM ds_users WHERE id = %s", (user_id,))
    result = cur.fetchone()

    if not result:
        return jsonify({"error": "User not found"}), 404

    if result[0] != current_password:
        return jsonify({"error": "Incorrect current password"}), 400

    # update password
    cur.execute("""
        UPDATE ds_users
        SET password = %s
        WHERE id = %s
    """, (new_password, user_id))

    conn.commit()

    cur.close()
    conn.close()

    return jsonify({"message": "Password updated successfully"})


# ==============================
# RUN SERVER
# ==============================
if __name__ == '__main__':
    app.run(debug=True)
