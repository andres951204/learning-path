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

> The result of the <code>typeof</code> evaluation of a nullish value will return <samp>"object"</samp>. This could be, because according to JavaScript specs, **null** is the default value, the empty value for a non-primitive type (objects and objects like values)
