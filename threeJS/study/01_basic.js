import * as THREE from "../build/three.module.js";

class App {
   constructor() {
      const divContainer = document.querySelector("#webgl-container");
      this._divContainer = divContainer;
      // 현재 클래스의 field로 정의. 다른 method에서 참조할 수 있도록 하기 위해.

      // Renderer를 생성하는 코드
      const renderer = new THREE.WebGL1Renderer({ antialias: true });
      // three.js의 webGLRendere라는 클래스를 통해 생성. 생성할 때 옵션을 설정 가능. (지금은 안티앨리어싱 활성화)
      renderer.setPixelRatio(window.devicePixelRatio);
      // renderer 객체에 setPixelRatio method를 호출해서 픽셀의 ratio값을 정의. 윈도우의 기능으로 픽셀값을 받아와서 정의.(display속성의 배율 항목과 일치)
      divContainer.appendChild(renderer.domElement);
      // 생성된 renderer의 domElement를 divContainer의 자식으로 추가한다.
      // 생성된 renderer의 domElement는 canvas 타입의 dom객체.
      this._renderer = renderer;
      // field화. App Class의 다른 method가 참조할 수 있도록 this._renderer로 정의.

      // Scene객체를 생성하는 코드
      const scene = new THREE.Scene();
      this._scene = scene;

      // camera객체를 구성하는 _setupCamera method호출
      this._setupCamera();
      // 광원을 설정하는 _setupLight method호출
      this._setupLight();
      // 3차원 모델을 설정하는 _setupModel method 호출
      this._setupModel();
      // 211023 현재는 아직 정의되어있지 않은 카메라, 조명, 3차원 모델

      // _로 시작하는 field와 method는 현재 App 클래스 내부에서만 사용되는 private field, private method라는 의미.
      // JS기능적으로는 없음.
      // 개발자들간의 약속.
      // 클래스 외부에서는 호출해서는 안된다.

      // 창 크기가 변할 때 발생하는 이벤트에 현 클래스의 resize method를 지정.
      window.onresize = this.resize.bind(this);
      // renderer나 camera는 창 크기가 변경될 때마다 그 크기에 맞게 속성 값을 재설정해줘야한다. 그래서 resize이벤트가 필요.
      // bind? : resize method안에서 this가 가르키는 객체가 이벤트 객체가 아니라 App클래스의 객체가 되도록 하기 위해서
      this.resize();
      // 초기 설정을 위한 호출

      // render method를 API에 넘겨주면서 호출
      requestAnimationFrame(this.render.bind(this));
      // render method : 3차원 그래픽 장면을 만들어주는 method
      // requestAnimationFrame은 적당한 시점에, 최대한 빠르게 method를 호출.
      // bind? : method안에서 사용된 this가 App 클래스의 객체를 가르키도록 하기 위한 코드.
   }
   
   _setupCamera() {
      // 3차원 그래픽을 출력할 영역에 대한 가로와 세로에 대한 크기 얻어오기
      const width = this._divContainer.clientWidth;
      const height = this._divContainer.clientHeight;
      
      // 크기를 이용해 카메라 객체를 생성
      const camera = new THREE.PerspectiveCamera(
         75,
         width / height,
         0.1,
         100
         );
         
      // 생성한 카메라 객체를 또 다른 method에서 사용할 수 있도록 field객체로 정의
      camera.position.z = 2;
      this._camera = camera;
   }
   
   _setupLight() {
      // 광원을 생성하기 위해서는 광원의 색상, 세기 값이 필요.
      const color = 0xffffff;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);

      // 광원의 위치 잡기
      light.position.set(-1, 2, 4);

      // 생성한 광원을 scene객체의 구성요소로 추가
      this._scene.add(light);
   }

   _setupModel() {
      // 파란색 정육면체 mesh를 생성
      // boxGeometry클래스를 이용해서 객체 생성 (가로, 세로, 깊이)
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      // 파란색 box
      const material = new THREE.MeshPhongMaterial({color: 0x44a88});

      // geometry, material 이용해서 mesh 생성
      const cube = new THREE.Mesh(geometry, material);

      // scene에 구성요소로 추가
      this._scene.add(cube);
      // field 정의
      this._cube = cube;
   }

   resize() {
      // this._divContainer의 크기 얻어오기
      const width = this._divContainer.clientWidth;
      const height = this._divContainer.clientHeight;

      // camera의 속성값 설정
      this._camera.aspect = width / height;
      this._camera.updateProjectionMatrix();

      // renderer의 크기 설정
      this._renderer.setSize(width, height);      
   }

   render(time) {
      // time인자를 받음, 렌더링이 시작된 이후 경과된 시간값으로 단위는 milli-second
      // scene을 카메라의 시점으로 렌더링하라는 코드
      this._renderer.render(this._scene, this._camera);

      // update method, 속성값을 변경함으로써 애니메이션 효과를 발생시킨다.
      this.update(time);
      
      // render method가 반복적으로 호출되도록
      requestAnimationFrame(this.render.bind(this));
   }

   update(time){
      // milli-second -> second 단위로 변환
      time *= 0.001; //second unit
      // 정육면체(cube)의 x,y축에 대한 회전값에 time값을 지정한다.
      this._cube.rotation.x = time; 
      this._cube.rotation.y = time; 
   }
};


window.onload = function () {
   new App();
}