<?php 

namespace App;

class Constants
{
    const ACCOUNT_TYPE = [
         1 => 'General',
         2 => 'Cash',
         3 => 'Current Account',
         4 => 'Credit Card',
         5 => 'Saving Account',
         6 => 'Bonus',
         7 => 'Insurance',
         8 => 'Investment',
         9 => 'Loan',
         10 => 'Mortgage',
         11 => 'Account with Overdraft',
    ];
    const NATURE = [
        'none', 'must', 'need', 'want' 
    ];
}