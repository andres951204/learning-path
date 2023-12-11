# Coercion (Type conversion)

There are some abstract operations that performs the task of type conversion.

This methods execute a internal conversion before the one we expect type conversion like this:

If the *hint* or *parameter* is a number:

1. Executes <code>valueoF()</code>
2. Then it executes <code>toString()</code>

If the *hint* or *parameter* is a string:

1. Then it executes <code>toString()</code>
2. Executes <code>valueoF()</code>

The methods that allows to do the type conversions are:

* toString()
* toNumber()
* toBoolean()
