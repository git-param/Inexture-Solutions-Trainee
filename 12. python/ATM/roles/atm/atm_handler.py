from data.constants import *
from data.utils import get_int_input
from data.DataDictionary import bank


class ATM:
    def __init__(self, branch_data, bank_name):
        self.branch_data = branch_data 
        self.bank_name = bank_name

    @property
    def branch_name(self):
        return self.branch_data["name"]

    @property
    def balance(self):
        return self.branch_data["balance"]

    def has_sufficient_balance(self, amount):
        return self.balance >= amount

    def deduct_balance(self, amount):
        self.branch_data["balance"] -= amount

    def add_balance(self, amount):
        self.branch_data["balance"] += amount


class ATMHandler:

    def __init__(self):
        self.atms = []

        for _, bank_data in bank.items():
            b_name = bank_data["bank_name"]

            for _, branch_data in bank_data["branches"].items():
                atm = ATM(branch_data, b_name)
                self.atms.append(atm)

    def select_atm(self):
        print(SELECT_ATM)

        for i, atm in enumerate(self.atms):
            print(ATM_OPTION.format(
                index=i + 1,
                branch_name=atm.branch_name,
                bank_name=atm.bank_name,
                balance=atm.balance
            ))

        choice = get_int_input(ASK_FOR_INPUT)

        while not (1 <= choice <= len(self.atms)):
            print(CHOICE_VALIDATION_ERROR)
            choice = get_int_input(ASK_FOR_INPUT)

        return self.atms[choice - 1]