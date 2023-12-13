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

# Boxing

JavaScript does a coercion to primitive types to objects, so we can access some properties like **length** for example. From the concept of boxing, is where we get the concept that, in JavaScript, everything is and object.

# Triple equal and double equal

They both check types and values, the main difference is that triple equal checks the types of the values expecting them to be equal, in case they aren't, it will return <code>false</code>. On the other hand, the double equal allows coercion, meaning that it will transform the value in order to do the comparison.

The comparison for the double equals works in the following way:
* The algorithm expect the two values to be ***primitive types*** (see first module). In case they aren't, it will start to implement coercion in this order:
1. toPrimitive
2. toNumber
3. comparison
