function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// // Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultOpen").click();


function openSetting(evt, tabName) {
    var i, settingcontent, tabSetting;
    settingcontent = document.getElementsByClassName("settingcontent");
    for (i = 0; i < settingcontent.length; i++) {
        settingcontent[i].style.display = "none";
    }
    tabSetting = document.getElementsByClassName("tabSetting");
    for (i = 0; i < tabSetting.length; i++) {
        tabSetting[i].className = tabSetting[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultSetting").click();

function openReward(evt, tabName) {
    var i, rewardcontent, tabReward;
    rewardcontent = document.getElementsByClassName("rewardcontent");
    for (i = 0; i < rewardcontent.length; i++) {
        rewardcontent[i].style.display = "none";
    }
    tabReward = document.getElementsByClassName("tabReward");
    for (i = 0; i < tabReward.length; i++) {
        tabReward[i].className = tabReward[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultReward").click();

function openWallet(evt, tabName) {
    var i, walletcontent, tabWallet;
    walletcontent = document.getElementsByClassName("walletcontent");
    for (i = 0; i < walletcontent.length; i++) {
        walletcontent[i].style.display = "none";
    }
    tabWallet = document.getElementsByClassName("tabWallet");
    for (i = 0; i < tabWallet.length; i++) {
        tabWallet[i].className = tabWallet[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

try {
    // Get the element with id="defaultOpen" and click on it
    //document.getElementById("defaultWallet").click();
} catch (e) { }



function openDeposit(evt, tabname) {
    var i, tabDeposit, boxDeposite;
    tabDeposit = document.getElementsByClassName("tabDeposit");
    for (i = 0; i < tabDeposit.length; i++) {
        tabDeposit[i].style.display = "none";
    }
    boxDeposite = document.getElementsByClassName("boxDeposit");
    for (i = 0; i < boxDeposite.length; i++) {
        boxDeposite[i].className = boxDeposite[i].className.replace(" active", "");
    }
    document.getElementById(tabname).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
// document.getElementById("defaultDeposit").click();

