from data.constants import *
from data.utils import get_int_input
from data.DataDictionary import users
from roles.users.user import User
from services.transaction_service import TransactionService
from roles.atm.atm_handler import ATMHandler


def login():
    card = get_int_input(CARD_NO_INPUT)
    pin = get_int_input(PIN_INPUT)

    for acc_no, user in users.items():
        if user["card_number"] == card and user["pin"] == pin:
            print(LOGIN_SUCCESS)
            return acc_no

    print(INVALID_CREDENTIALS)
    return None


# MAIN LOOP 
while True:

    print(MAIN_OPTIONS.format(sep=SEPARATOR_40))

    role_choice = get_int_input(ASK_FOR_INPUT)

    match role_choice:

        # USER 
        case 1:
            while True:
                print(DISPLAY_USER_OPTIONS.format(sep=SEPARATOR_60))
                user_choice = get_int_input(ASK_FOR_INPUT)

                match user_choice:

                    # REGISTER 
                    case 1:
                        user = User()
                        user.ask_user_details()
                        user.display_user_details()

                    # LOGIN 
                    case 2:
                        acc_no = login()

                        if not acc_no:
                            continue
                        
                        atm_handler = ATMHandler()
                        atm = atm_handler.select_atm()

                        while True:
                            print(USER_ACTION_MENU)
                            action = get_int_input(ASK_FOR_INPUT)

                            match action:

                                # WITHDRAW 
                                case 1:
                                    amount = get_int_input(ENTER_AMOUNT)
                                    if amount <= 0:
                                        print(ZERO_AMOUNT_ERROR)
                                        continue
                                    TransactionService.withdraw(acc_no, amount, atm)

                                #  DEPOSIT 
                                case 2:
                                    amount = get_int_input(ENTER_AMOUNT)
                                    TransactionService.deposit(acc_no, amount, atm)

                                # BALANCE 
                                case 3:
                                    print(BALANCE_DISPLAY.format(
                                        balance=users[acc_no]["bank_balance"]
                                    ))

                                # EXIT 
                                case 4:
                                    break

                                case _:
                                    print(CHOICE_VALIDATION_ERROR)

                    # EXIT USER MENU 
                    case 3:
                        print(EXIT_MESSAGE)
                        break

                    case _:
                        print(CHOICE_VALIDATION_ERROR)

        # ADMIN 
        case 2:
            print(DISPLAY_ADMIN_OPTIONS.format(sep=SEPARATOR_60))

        # BANK 
        case 3:
            print(CHOICE_VALIDATION_ERROR)

        # EXIT 
        case 4:
            print(EXIT_MESSAGE)
            break

        case _:
            print(CHOICE_VALIDATION_ERROR)