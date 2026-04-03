from data.utils import *
from data.DataDictionary import *
from roles.users.userConstant import *

class User:
    next_account_number = 17002010000

    def __init__(self):
        self.account_number = User.next_account_number
        User.next_account_number += 1

    def register_user(self, user_name, user_bank, user_balance):
        self.card_number = generate_random_number(12)
        self.pin = generate_random_number(4)
        self.bank_name = user_bank
        self.user_name = user_name
        self.bank_balance = user_balance

        # STORE USER
        users[self.account_number] = {
            user_name: self.user_name,
            bank_name: self.bank_name,
            account_number: self.account_number,
            bank_balance: self.bank_balance,
            card_number: self.card_number,
            pin: self.pin,
            daily_withdrawn: 0,
            daily_transactions: 0
        }
        
        
    def ask_user_details(self):
        user_name = input(ASK_USER_NAME)
        bank_dictionary = bank

        print(DISPLAY_BANK_NAMES)

        for index, bank_data in bank_dictionary.items():
            print(f"{index} {bank_data[bank_name]}")
        choice = get_int_input(ASK_FOR_INPUT)

        while not (choice > 0 and choice < index + 1):
            print(CHOICE_VALIDATION_ERROR)
            choice = get_int_input(ASK_FOR_INPUT)
        user_bank = bank_dictionary[choice][bank_name]

        bank_balance = get_int_input(ASK_USER_BALANCE)

        self.register_user(user_name, user_bank, bank_balance)

    def display_user_details(self):
        print(DISPLAY_USER_DETAILS.format(
            user_name=self.user_name,
            account_number=self.account_number,
            bank_name=self.bank_name,
            bank_balance=self.bank_balance,
            card_number = self.card_number,
            pin = self.pin
        ))
