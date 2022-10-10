const get = id => document.getElementById(id);

function validID(id) {
    return (id != '') && (!(/[^a-z0-9_]/.test(id)));
}

function hideErrors() {
    for (const element of document.getElementsByClassName("invalid"))
        element.classList.add("hidden");
}

function generate() {
    let valid = true;
    // checks mod id validity
    const modId = get('modId').value;
    if (!validID(modId)) {
        valid = false;
        get('invalidModId').classList.remove("hidden");
    }
    // checks block id validity
    const blockId = get('blockId').value;
    if (!validID(blockId)) {
        valid = false;
        get('invalidBlockId').classList.remove("hidden");
    }
    if (!valid) return;
    // generate json files here
}