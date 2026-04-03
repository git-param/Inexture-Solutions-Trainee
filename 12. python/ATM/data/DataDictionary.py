from data.constants import *

bank_name = 'bank_name'
user_name = 'user_name'
account_number = 'account_number'
user_bank = 'user_bank'
pin = 'pin'
card_number = 'card_number'
bank_balance = 'bank_balance'
daily_withdrawn = 'daily_withdrawn'
daily_transactions = 'daily_transactions'
branches = 'branches'
 
bank = {
    1: {
        bank_name: 'HDFC',
        branches: {
            1001: {'name': "ISKON", "balance": 50000},
            1002: {'name': "AMBLI", "balance": 40000},
            1003: {'name': "BOPAL", "balance": 30000}
        }
    },
    2: {
        bank_name: 'SBI',
        branches: {
            2001: {'name': "ISKON", "balance": 45000},
            2002: {'name': "AMBLI", "balance": 35000},
            2003: {'name': "BOPAL", "balance": 25000}
        }
    },
    3: {
        bank_name: 'ICICI',
        branches: {
            3001: {'name': "ISKON", "balance": 60000},
            3002: {'name': "AMBLI", "balance": 50000},
            3003: {'name': "BOPAL", "balance": 40000}
        }
    }
}

users = {
    1: {
        user_name : "Param Dholakia",
        bank_name : "HDFC",
        account_number : 123,
        bank_balance : 25000,
        card_number : 9998887776,
        pin : 1000,
        daily_transactions: 0,
        daily_withdrawn: 0
    }
}