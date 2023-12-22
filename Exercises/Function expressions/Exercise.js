//Arrow anonymous functions
const getStudentById = (studentId) => (
    studentRecords.find((id) => studentId == id)
)

const printRecords = (recordIds) => {
    const records = recordIds.map(getStudentById)
    records.sort((record1, record2) => record1 - record2)
    records.forEach((record) => console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not paid"}`));
}

const paidStudentsToEnroll = () => [
    ...currentEnrollment,
    ...(studentRecords.filter((record) => record.paid & !currentEnrollment.includes(record.id)))
        .map((record) => record.id)
]

const remindUnpaid = (recordIds) => (
    printRecords(recordIds.filter((studentId) => !getStudentById(studentId).paid))
)

//Named functions
function getStudentById(studentId) {
    return studentRecords.find(function matchId(id) {
        return studentId == id
    })
}

function printRecords(recordIds) {
    const records = recordIds.map(getStudentById)
    records.sort(function sortByNameAsc(record1, record2) {
        record1 - record2
    })

    records.forEach(function printRecord(record) {
        console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not paid"}`)
    });
}

function paidStudentsToEnroll() {
    const idsToEnroll = studentRecords.filter(function needToEnroll(record) {
        return (record.paid && !currentEnrollment.includes(record.id)).map(function getStudentId(record) {
            return record.id
        })
    });
    return [...currentEnrollment, ...idsToEnroll]
}

function remindUnpaid(recordIds) {
    const unpaidIds = recordIds.filter(function isUnpaid(studentId) {
        let record = getStudentById(studentId)
        return !record.paid
    })

    printRecords(unpaidIds)
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
    { id: 313, name: "Frank", paid: true, },
    { id: 410, name: "Suzy", paid: true, },
    { id: 709, name: "Brian", paid: false, },
    { id: 105, name: "Henry", paid: false, },
    { id: 502, name: "Mary", paid: true, },
    { id: 664, name: "Bob", paid: false, },
    { id: 250, name: "Peter", paid: true, },
    { id: 375, name: "Sarah", paid: true, },
    { id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
    Bob (664): Not Paid
    Henry (105): Not Paid
    Sarah (375): Paid
    Suzy (410): Paid
    ----
    Bob (664): Not Paid
    Frank (313): Paid
    Henry (105): Not Paid
    Mary (502): Paid
    Peter (250): Paid
    Sarah (375): Paid
    Suzy (410): Paid
    ----
    Bob (664): Not Paid
    Henry (105): Not Paid
*/
