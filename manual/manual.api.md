MiracleBush Api
--
###var $bush.api.only([variants, [fault, [value, [ignoreCase]]]]);
Value ����� �������� ������ ����� �� variants ��������, ��� ������� �������� fault.
���� ignoreCase==true ������������ �������. 
```javascript
$bush.api.only(['red', 'green', 'blue'], 'black', 'brown', true); // return 'black'
$bush.api.only(['red', 'green', 'blue'], 'black', 'blue', true); // return 'blue'
$bush.api.only(['red', 'green', 'blue'], 'black', 'Blue', false); // return 'black' `cause different case
```