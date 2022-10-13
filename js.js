const fullBlockBlockstate =
"{\n" +
"  \"variants\": {\n" +
"    \"\": { \"model\": \"MOD_ID:block/ID\" }\n" +
"  }\n" +
"}";
const slabBlockstate =
"{\n" +
"  \"variants\": {\n" +
"    \"type=bottom\": {\n" +
"      \"model\": \"MOD_ID:block/ID_slab\"\n" +
"    },\n" +
"    \"type=double\": {\n" +
"      \"model\": \"MOD_ID:block/ID\"\n" +
"    },\n" +
"    \"type=top\": {\n" +
"      \"model\": \"MOD_ID:block/ID_slab_top\"\n" +
"    }\n" +
"  }\n" +
"}\n";
const stairBlockstate =
"{\n" +
"  \"variants\": {\n" +
"    \"facing=east,half=bottom,shape=inner_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=east,half=bottom,shape=inner_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\"\n" +
"    },\n" +
"    \"facing=east,half=bottom,shape=outer_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=east,half=bottom,shape=outer_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\"\n" +
"    },\n" +
"    \"facing=east,half=bottom,shape=straight\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs\"\n" +
"    },\n" +
"    \"facing=east,half=top,shape=inner_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"x\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=east,half=top,shape=inner_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=east,half=top,shape=outer_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"x\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=east,half=top,shape=outer_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=east,half=top,shape=straight\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs\",\n" +
"      \"x\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=bottom,shape=inner_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=bottom,shape=inner_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=bottom,shape=outer_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=bottom,shape=outer_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=bottom,shape=straight\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs\",\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=top,shape=inner_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=top,shape=inner_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"x\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=top,shape=outer_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=top,shape=outer_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"x\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=north,half=top,shape=straight\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=south,half=bottom,shape=inner_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\"\n" +
"    },\n" +
"    \"facing=south,half=bottom,shape=inner_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=south,half=bottom,shape=outer_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\"\n" +
"    },\n" +
"    \"facing=south,half=bottom,shape=outer_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=south,half=bottom,shape=straight\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs\",\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=south,half=top,shape=inner_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=south,half=top,shape=inner_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=south,half=top,shape=outer_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=south,half=top,shape=outer_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=south,half=top,shape=straight\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=bottom,shape=inner_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=bottom,shape=inner_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=bottom,shape=outer_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"y\": 90,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=bottom,shape=outer_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=bottom,shape=straight\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs\",\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=top,shape=inner_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=top,shape=inner_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_inner\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=top,shape=outer_left\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=top,shape=outer_right\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs_outer\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 270,\n" +
"      \"uvlock\": true\n" +
"    },\n" +
"    \"facing=west,half=top,shape=straight\": {\n" +
"      \"model\": \"MOD_ID:block/ID_stairs\",\n" +
"      \"x\": 180,\n" +
"      \"y\": 180,\n" +
"      \"uvlock\": true\n" +
"    }\n" +
"  }\n" +
"}";
const fullBlockBlockModel =
"{\n" +
"  \"parent\": \"block/cube_all\",\n" +
"  \"textures\": {\n" +
"    \"all\": \"MOD_ID:block/ID\"\n" +
"  }\n" +
"}";
const slabBlockModel =
"{\n" +
"  \"parent\": \"minecraft:block/slab\",\n" +
"  \"textures\": {\n" +
"    \"bottom\": \"MOD_ID:block/ID\",\n" +
"    \"top\": \"MOD_ID:block/ID\",\n" +
"    \"side\": \"MOD_ID:block/ID\"\n" +
"  }\n" +
"}";
const slabTopModel =
"{\n" +
"  \"parent\": \"minecraft:block/slab_top\",\n" +
"  \"textures\": {\n" +
"    \"bottom\": \"MOD_ID:block/ID\",\n" +
"    \"top\": \"MOD_ID:block/ID\",\n" +
"    \"side\": \"MOD_ID:block/ID\"\n" +
"  }\n" +
"}";
const stairBlockModel =
"{\n" +
"  \"parent\": \"minecraft:block/stairs\",\n" +
"  \"textures\": {\n" +
"    \"bottom\": \"MOD_ID:block/ID\",\n" +
"    \"top\": \"MOD_ID:block/ID\",\n" +
"    \"side\": \"MOD_ID:block/ID\"\n" +
"  }\n" +
"}";
const innerStairModel =
"{\n" +
"  \"parent\": \"minecraft:block/inner_stairs\",\n" +
"  \"textures\": {\n" +
"    \"bottom\": \"MOD_ID:block/ID\",\n" +
"    \"top\": \"MOD_ID:block/ID\",\n" +
"    \"side\": \"MOD_ID:block/ID\"\n" +
"  }\n" +
"}\n";
const outerStairModel =
"{\n" +
"  \"parent\": \"minecraft:block/outer_stairs\",\n" +
"  \"textures\": {\n" +
"    \"bottom\": \"MOD_ID:block/ID\",\n" +
"    \"top\": \"MOD_ID:block/ID\",\n" +
"    \"side\": \"MOD_ID:block/ID\"\n" +
"  }\n" +
"}\n";
const fullBlockItemModel =
"{\n" +
"  \"parent\": \"MOD_ID:block/ID\"\n" +
"}\n";
const slabItemModel =
"{\n" +
"  \"parent\": \"MOD_ID:block/ID_slab\"\n" +
"}";
const stairItemModel =
"{\n" +
"  \"parent\": \"MOD_ID:block/ID_stairs\"\n" +
"}";

// is equivelant to document.getElementById
const get = id => document.getElementById(id);

// returns whether the given id is valid
function validID(id) {
    return id && (!(/[^a-z0-9_-]/.test(id)));
}

// hides errors with the modid and blockid namespaces
function hideErrors() {
    for (const element of document.getElementsByClassName('invalid'))
        element.classList.add('hidden');
}

// generates json files
function generate() {
    let valid = true;
    // checks mod id validity
    const modId = get('modId').value;
    if (!validID(modId)) {
        valid = false;
        get('invalidModId').classList.remove('hidden');
    }
    // checks block id validity
    const blockId = get('blockId').value;
    if (!validID(blockId)) {
        valid = false;
        get('invalidBlockId').classList.remove('hidden');
    }
    // stop the function if any input is invalid
    if (!valid) return;
    // checked block types
    const fullBlock = get('full').checked;
    const slab = get('slab').checked;
    const stairs = get('stairs').checked;
    // creates blockstates and models for each block type if it is checked
    if (fullBlock) {
        createBlockState(modId, blockId, fullBlockBlockstate);
        createBlockModel(modId, blockId, fullBlockBlockModel);
        createItemModel(modId, blockId, fullBlockItemModel);
    }
    if (slab) {
        createBlockState(modId, blockId, slabBlockstate);
        createBlockModel(modId, blockId, slabBlockModel);
        createBlockModel(modId, blockId, slabTopModel);
        createItemModel(modId, blockId, slabItemModel);
    }
    if (stairs) {
        createBlockState(modId, blockId, stairBlockstate);
        createBlockModel(modId, blockId, stairBlockModel);
        createBlockModel(modId, blockId, innerStairModel);
        createBlockModel(modId, blockId, outerStairModel);
        createItemModel(modId, blockId, stairItemModel);
    }
}

// creates a downloadable blockstate
function createBlockState(modId, blockId, data) {
    createDownloadElement('blockstates', blockId, data.replaceAll('MOD_ID', modId).replaceAll('ID', blockId));
}

// creates a downloadable block model
function createBlockModel(modId, blockId, data) {
    createDownloadElement('models/block', blockId, data.replaceAll('MOD_ID', modId).replaceAll('ID', blockId));
}

// creates a downloadable item model
function createItemModel(modId, blockId, data) {
    createDownloadElement('models/item', blockId, data.replaceAll('MOD_ID', modId).replaceAll('ID', blockId));
}

// creates a downloadable button
function createDownloadElement(path, name, data) {
    const download = document.createElement('a');
    download.setAttribute('href', getJSONFileHref(data));
    download.setAttribute('download', name + '.json');
    download.innerHTML = path + '/' + name + '.json';
    for (let breaks = 0; breaks < 2; breaks++)
        document.body.appendChild(document.createElement('br'));
    document.body.appendChild(download);
}

// encodes the given data to create a download link
function getJSONFileHref(data) {
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);
}