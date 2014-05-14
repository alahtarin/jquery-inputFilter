jquery-inputFilter
==================

Filter input plugin for jQuery.
It allows you to restrict your inputs to allow typing only certain symbol, like digits or letters.

### Usage
To enable plugin for a certain input:

	$("[name='email']").inputFilter('email');
    
To enable plugin for a set of inputs:

	$(".emails").inputFilter('email');
    
    
### Configuration
The only parameter is the filter type, which tells what symbols should be allowed.
You can pass it like a parameter:

	$("[name='email']").inputFilter('email');
    
Or like a hash (better for future compatibility):

	$("[name='email']").inputFilter({ type: 'email' });
    
    
#### Available filter types:
- **all** - accept all symbols. Applied by default if no type specified;
- **text** - allow only English and Russian letters;
- **name** - allow English and Russian letters and '-' character;
- **email** - allow English letters, numbers and !#$%&'*+-\/=?^_`~. symbols;
- **number** - allow only digits;
- **phone** - allow digits and '-', '+' symbols.




