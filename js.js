const get = id => document.getElementById(id);
function validID(id) {
    return !(/[^a-z0-9_]/.test(id));
}
function generate() {
    const modId = get('modid');
    const blockId = get('blockId');
    // if the name of the mod or block are illegal, alert the user and stop the function
    if (!validID(modId) || !validID(blockId)) {
        alert('Mod ID / Block ID contain illegal characters');
        return;
    }
    // generate json files here
}