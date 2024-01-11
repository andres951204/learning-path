class CodeBuilder {

  constructor(name) {
    this.name = name
    this.fields = []
  }

  addField(fieldName) {
    this.fields.push(fieldName)
    return this
  }

  toString() {
    let names = [...this.fields];
    let constructor = ''
    let constructorFields = []
    if (this.fields.length > 0) {
      constructorFields = [...this.fields]
      for (let idx in constructorFields) {
        constructorFields[idx] = `    this.${this.fields[idx]} = ${this.fields[idx]};`
      }
      constructor = `  constructor(${names.join(', ')}) {\n${constructorFields.join('\n')}\n  }\n`
    }

    return `class ${this.name} {\n${constructor}}`
  }
}

//Expected result
/*
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}  
*/

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());