# COMMON 
SEPARATOR_40 = "=" * 40
SEPARATOR_60 = "=" * 60

ASK_FOR_INPUT = "\nPlease enter your choice: "
CHOICE_VALIDATION_ERROR = "Enter valid choice"
EXIT_MESSAGE = "Exiting..."

# MAIN MENU
MAIN_OPTIONS = """

{sep}

Enter your role:

1. USER
2. ADMIN
3. BANK
4. EXIT
"""

# USERS
CARD_NO_INPUT = "Enter your card number: "
PIN_INPUT = "Enter PIN: "

DISPLAY_USER_OPTIONS = """

{sep}

            WELCOME USER!

-:PLEASE SELECT THE OPERATION YOU WANT TO PERFORM:-

1. REGISTER NEW USER
2. LOGIN 
3. EXIT THE USER MENU"""


USER_ACTION_MENU = """
1. Withdraw
2. Deposit
3. Check Balance
4. Exit
"""

BALANCE_DISPLAY = "\nBalance: {balance}"

# TRANSACTIONS
ENTER_AMOUNT = "Enter amount: "
ZERO_AMOUNT_ERROR = "Invalid Amount - enter amount > 0"
WITHDRAW_SUCCESS = "Withdrawn: {amount}, Charge: {charge}"
DEPOSIT_SUCCESS = "Deposited: {amount}"


# ADMIN
DISPLAY_ADMIN_OPTIONS = """

{sep}

            WELCOME ADMIN!

-:PLEASE SELECT THE OPERATION YOU WANT TO PERFORM:-

1. REGISTER NEW USER
2. ADD NEW BANK
3. UPDATE THE DAILY AMOUNT LIMIT
4. UPDATE THE DAILY TRANSACTION LIMIT
5. EXIT THE ADMIN MENU"""

# LOGIN
LOGIN_SUCCESS = "Login successful"
INVALID_CREDENTIALS = "Invalid credentials"

# ATM 
SELECT_ATM = "\nSelect ATM:"
ATM_OPTION = "{index}. {branch_name} ({bank_name}) - Balance: {balance}"