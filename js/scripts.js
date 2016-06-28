// business logic

function Contact(first, last, email, picture) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.picture = picture;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// UI Logic

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedEmail = $("input#new-email").val();
    var inputtedPicture = $("input#new-picture").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedEmail, inputtedPicture);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".email").html("<a href='mailto:" + newContact.email + "'>" + newContact.email + "</a>");
      $(".picture").html("<img src='" + newContact.picture + "' alt='" + newContact.fullName + "'/>");
    });
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-email").val("");
    $("input#new-picture").val("");
  });
});
