from data.DataDictionary import users
from services.transactionConstant import *

class TransactionService:

    @staticmethod
    def withdraw(acc_no, amount, atm):
        user_data = users[acc_no]

        # 1. Transaction count limit
        if user_data["daily_transactions"] >= MAX_DAILY_TRANSACTIONS:
            print(DAILY_LIMIT_REACHED)
            return

        # 2. Per transaction limit
        if amount > MAX_WITHDRAW_PER_TXN:
            print(PER_TXN_LIMIT_REACHED)
            return

        # 3. Daily withdrawal limit
        if user_data["daily_withdrawn"] + amount > MAX_DAILY_WITHDRAW:
            print(DAILY_AMOUNT_LIMIT_REACHED)
            return

        # 4. Cross-bank charge
        charge = 0
        if atm.bank_name != user_data["bank_name"]:
            charge = amount * CROSS_BANK_CHARGE

        total_deduction = amount + charge

        # 5. User balance check
        if user_data["bank_balance"] < total_deduction:
            print(INSUFFICIENT_BALANCE)
            return

        # 6. ATM balance check
        if atm.balance < amount:
            print(ATM_INSUFFICIENT_BALANCE)
            return

        # 7. Perform transaction
        user_data["bank_balance"] -= total_deduction
        user_data["daily_withdrawn"] += amount
        user_data["daily_transactions"] += 1

        atm.deduct_balance(amount)

        print(f"Withdrawn: {amount}, Charge: {charge}")

    @staticmethod
    def deposit(acc_no, amount, atm):
        pass