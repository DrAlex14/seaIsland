import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


export default function threeFun() {
    // 初始化场景
    const scene = new THREE.Scene();
    
    // 初始化相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    // 设置相机位置
    camera.position.set(-50, 50, 130);
    // 更新摄像头宽高比例
    camera.aspect = window.innerWidth / window.innerHeight;
    // 更新摄像头投影矩阵
    camera.updateProjectionMatrix();
    
    scene.add(camera);
    
    // 初始化渲染器
    renderer = new THREE.WebGLRenderer({
        // 设置抗锯齿
        antialias: true
    })
    renderer.outputEncoding = THREE.sRGBEncoding;
    // 渲染器宽高
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // 根据屏幕大小改变，修改渲染器宽高，摄像头的比例
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    })
    
    // 将渲染器画布添加到页面上
    document.getElementById('app').appendChild(render.domElement);
    

    // 实例化控制器
    const controls = new OrbitControls(camera, renderer.domElement)
    console.log(controls);
    function render() {
        // 渲染场景 
        renderer.render(scene, camera);
        // 引擎自动更新渲染器
        requestAnimationFrame(render);
    }
    
    render();
    
    
    // 添加平面
    const planeGeometry = new THREE.PlaneGeometry(100, 100);
    const planeMaterial = new THREE.MeshBasicMaterial({color: 0xffffff});
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    scene.add(plane);
}
