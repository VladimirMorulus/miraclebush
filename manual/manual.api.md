MiracleBush Api
--
###var $bush.api.only([variants, [fault, [value, [ignoreCase]]]]);
Value может являться только одним из variants значений, или принять значение fault.
Если ignoreCase==true игнорируется регистр. 
```javascript
$bush.api.only(['red', 'green', 'blue'], 'black', 'brown', true); // return 'black'
$bush.api.only(['red', 'green', 'blue'], 'black', 'blue', true); // return 'blue'
$bush.api.only(['red', 'green', 'blue'], 'black', 'Blue', false); // return 'black' `cause different case
```