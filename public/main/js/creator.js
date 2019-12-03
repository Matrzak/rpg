

$('select').on('change', function() {
    if(this.value === "Warhammer Fantasy Roleplay")
        $("#changeable").html(wfrp);
});

// WARHAMMER

let wfrp =
  `
  <div class="form-group row">
    <label class="col-sm-2 col-form-label setRed">Imie i Nazwisko</label>
    <div class="col-sm-10">
      <input type="text" class="form-control">
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button href="#" type="submit" class="btn btn-primary hideS">Wylosuj swoją postać</button>
      <button href="#" type="submit" class="btn btn-primary hideS">Ręczne uzupełnienie</button>
    </div>
  </div>`;



$(document).on('click', '.hideS', function(e) {
    $("#changeable").fadeOut(1000,() => {

    });
});