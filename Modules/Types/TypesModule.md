# Data types

### Primitive

Are simple, can hold a **single** value.

- undefined
- string
- number
- boolean
- symbol

### Non-primitive

Are complex, can hold multiple values and methods.

> ### Useful notes
>
> 1.  All objects in JavaScript are passed by reference and all primitive types are passed by value
> 2.  In JavaScript, variables don't have types, values do.

# Operator "typeof"

It wil always return a string, indicating the type of the variable value that is being evaluated.

<code>
<var>let v;</var>

<var>typeof v;</var>
<samp>//"undefined"</samp>
</code>

If the value we are evaluating is an subtype of object, like an array for example, it will return object

<code>
<var>let v = [];</var>

<var>typeof v;</var>
<samp>//"object"</samp>
</code>

If we are looking for a more certain approach to a validation of **is this an array** we can use the <code>Array.isArray()</code> method.

<code>
<var>let v = [];</var>

<var>Array.isArray(v);</var>
<samp>//true</samp>
</code>

> The result of the <code>typeof</code> evaluation of a nullish value will return <samp>"object"</samp>. This could be, because according to JavaScript specs, **null** is the default value for a non-primitive type (objects and objects like values)

# Kind of emptiness

### undefined

In JavaScript <code><samp>undefined</samp></code> refers both a variable that doesn't have a value and a one that is not even been created.

A more correct approach to this would be <code><samp>undefined</samp></code> referring to a variable with no assigned value and <code><samp>undeclared</samp></code> as a reference to a variable that has not been created.

# NaN & isNaN

**NaN** refers to an _"invalid number"_. **NaN**s aren't equal to each other according to the JavaScript specs.
If we use a **NaN** in a math operation, the result always will be **NaN**.

The isNaN method coerce the value into a number and then, it makes the validation.

A NaN is the only value on JavaScript that is not equal to itself.

# Fundamental objects

Fundamental objects are essentially the build-in objects orientation approach of JavaScript.

### Use new

To create a **fundamental object** we use the keyword new. We should use **new** with the next fundamental objects:

* Object()
* Array()
* Function()
* Date()
* RegExp()
* Error()

There are some cases in which the use of the **new** keybord is not recommended to be used:

* String()
* Number()
* Boolean()