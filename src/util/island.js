import * as THREE from 'three'
// 导入gltf载入库
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";


// 导入小岛模型
export default function initIsland(scene) {
    // 导入载入库
    const loader = new GLTFLoader();
    // 导入解压库
    const dracoLoader = new DRACOLoader();
    // 添加draco载入库
    dracoLoader.setDecoderPath("./draco/");
    // 添加draco载入库
    loader.setDRACOLoader(dracoLoader);

    loader.load("./model/island2.glb", (gltf) => {
        scene.add(gltf.scene);
    });

    // 载入环境纹理hdr
    const hdrLoader = new RGBELoader();
    hdrLoader.loadAsync("./assets/050.hdr").then((texture) => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        scene.background = texture;
        scene.environment = texture;
    });
}