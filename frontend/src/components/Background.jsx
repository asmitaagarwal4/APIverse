import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

function Background() {
  return (
   <ShaderGradientCanvas
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
          pointerEvents="none"
        >
          <ShaderGradient
            control="query"
            urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.5&cAzimuthAngle=180&cDistance=5&cPolarAngle=120&cameraZoom=1&color1=%237f5cff&color2=%23000000&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=40&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=0.7&positionX=0&positionY=0.9&positionZ=0&range=enabled&rangeEnd=35.3&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&toggleAxis=false&type=plane&uAmplitude=0&uDensity=1&uFrequency=5.5&uSpeed=0.5&uStrength=3&uTime=0&wireframe=false"
          />
        </ShaderGradientCanvas>
  );
}

export default Background;