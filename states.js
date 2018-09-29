function allStates() {
    var states = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",  
        "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",  
        "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",  
        "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",  
        "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"];
    var contents = "";
    for(var i = 0;i<states.length;i++) {
        contents += "<option value ='"+states[i]+"'>"+states[i]+"</option>";
    }
    console.log(contents);
}
allStates();