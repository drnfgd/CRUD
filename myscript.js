var rollV, nameV, genderV, addressV;

function readFom() {
    rollV = document.getElementById("roll").value;
    nameV = document.getElementById("name").value;
    genderV = document.getElementById("gender").value;
    addressV = document.getElementById("address").value;
    surname1 = document.getElementById("surname").value;
    middlename1 = document.getElementById("middlename").value;
    email1 = document.getElementById("email").value;
    Swal.fire("Data Read Succesfully!");
    console.log(rollV, nameV, addressV, genderV);
}

document.getElementById("insert").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + rollV)
        .set({
            rollNo: rollV,
            name: nameV,
            gender: genderV,
            address: addressV,
            Surname: surname1,
            Middlename: middlename1,
            Email: email1,
        });
    Swal.fire("Data Inserted Succesfully!");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("email").value = "";
};

document.getElementById("read").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + rollV)
        .on("value", function (snap) {
            document.getElementById("roll").value = snap.val().rollNo;
            document.getElementById("name").value = snap.val().name;
            document.getElementById("gender").value = snap.val().gender;
            document.getElementById("address").value = snap.val().address;
            document.getElementById("surname").value = snap.val().Surname;
            document.getElementById("middlename").value = snap.val().Middlename;
            document.getElementById("email").value = snap.val().Email;
        });
};

document.getElementById("update").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + rollV)
        .update({
            //   rollNo: rollV,
            name: nameV,
            gender: genderV,
            address: addressV,
            Surname: surname1,
            Middlename: middlename1,
            Email: email1,
        });
    Swal.fire("Data Updated Succesfully!");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("email").value = "";
};
document.getElementById("delete").onclick = function () {
    readFom();

    firebase
        .database()
        .ref("student/" + rollV)
        .remove();
    Swal.fire("Data Deleted Succesfully!");
    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("address").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("middlename").value = "";
    document.getElementById("email").value = "";
};