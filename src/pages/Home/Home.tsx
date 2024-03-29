import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import texture from "../../assets/texture.svg";
import mesh from "../../assets/mesh.svg";
import normal from "../../assets/normal.svg";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoPerson } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { FileProcessor } from "../../utils/FileProcessor";
import axios from "axios";

const Home = () => {
  // const [currentTexture, setcurrentTexture] = useState("");
  const [showGenerate, setShowGenerate] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const headers = {
    Authorization: "Bearer msy_jVZDOBtDxElCCJ7RKE9q9lZG7MbcsJxQj0iq",
  };

  const get3d = (id: string) => {
    axios
      .get(` https://api.meshy.ai/v1/image-to-3d/${id}`, {
        headers,
      })
      .then(({ data }) => {
        console.log(data);

        if (data.progress !== 100) {
          setTimeout(() => {
            get3d(id);
          }, 4000);
        } else {
        }
      });
  };

  const onDrop = useCallback((acceptedFiles: any) => {
    setUploading(true);
    FileProcessor(acceptedFiles[0])
      .then(({ secure_url }) => {
        setUploading(false);
        const payload = {
          image_url: secure_url,
          enable_pbr: true,
        };

        try {
          axios
            .post("https://api.meshy.ai/v1/image-to-3d", payload, { headers })
            .then(({ data }) => {
              localStorage.setItem("modelId", data.result);

              get3d(data.result);
            });
        } catch (error) {
          console.error(error);
        }
      })
      .catch(() => {
        setUploading(false);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="h-[100vh] bg-gray-400">
      <div className="w-11/12 mx-auto">
        {/* TOP OPTIONS */}
        <div className="pt-4 relative z-10">
          <div className="bg-black flex p-2 justify-center items-center w-fit mx-auto rounded-md gap-6">
            <div className="flex gap-4">
              <button className="p-1" title="Texture">
                <img src={texture} alt="" />
              </button>
              <button className="p-1" title="Mesh">
                <img src={mesh} alt="" />
              </button>
              <button className="p-1" title="Normal">
                <img src={normal} alt="" />
              </button>
            </div>

            <div className="flex gap-4 items-center">
              <div className="relative">
                <button
                  title="2d image"
                  onClick={() => setShowImage(!showImage)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path
                      fill="#fff"
                      fill-opacity=".01"
                      d="M0 0h20v20H0z"
                    ></path>
                    <path
                      stroke="#fff"
                      stroke-linejoin="round"
                      stroke-opacity=".95"
                      stroke-width="2"
                      d="M6.5 17H3V3h14v7M6.5 17H17v-7M6.5 17s1.396-4.55 4-6c2.225-1.238 6.5-1 6.5-1M9.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                    ></path>
                  </svg>
                </button>

                {showImage && (
                  <div className="absolute w-48 flex justify-center items-center bg-white right-0 top-10 h-48">
                    <img
                      src="https://images.unsplash.com/photo-1711377785726-47c7dd8773ff?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-36 h-36 object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  title="2d image"
                  onClick={() => setShowImage(!showImage)}
                  className="py-2"
                >
                  <svg
                    data-v-2015fee2=""
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <g fill="#fff">
                      <path fill-opacity=".01" d="M0 0h20v20H0z"></path>
                      <path
                        fill-opacity=".95"
                        d="M5.43 9.086a1 1 0 1 0-.462-1.946l.462 1.946Zm2.148 8.052a1 1 0 1 0-.546-1.924l.546 1.924Zm8.01-9.998a1 1 0 1 0-.463 1.946l.463-1.946Zm-2.065 8.074a1 1 0 1 0-.546 1.924l.546-1.924ZM14.333 8v1h2V8h-2Zm-10 0v1h2V8h-2Zm3.82 2.51a1 1 0 1 0-1.417 1.412l1.416-1.412Zm2.18 3.605-.708.706a1 1 0 0 0 1.413.004l-.705-.71Zm3.676-2.238a1 1 0 1 0-1.408-1.42l1.408 1.42ZM11.333 8a1 1 0 1 0-2 0h2Zm-2 4.667a1 1 0 1 0 2 0h-2ZM4.968 7.14A5.168 5.168 0 0 0 1 12.167h2a3.168 3.168 0 0 1 2.43-3.081L4.968 7.14ZM1 12.167a5.167 5.167 0 0 0 5.167 5.167v-2A3.167 3.167 0 0 1 3 12.167H1Zm5.167 5.167c.487 0 .961-.068 1.41-.196l-.545-1.924c-.274.078-.564.12-.865.12v2Zm8.958-8.248a3.168 3.168 0 0 1 2.43 3.08h2a5.168 5.168 0 0 0-3.967-5.026l-.463 1.946Zm2.43 3.08a3.167 3.167 0 0 1-3.166 3.168v2a5.167 5.167 0 0 0 5.166-5.167h-2Zm-3.166 3.168c-.302 0-.592-.042-.866-.12l-.546 1.924c.45.128.924.195 1.412.195v-2ZM16.333 8a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4h2Zm-6-6a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4V2Zm-3.597 9.922 2.889 2.9 1.417-1.413-2.89-2.899-1.416 1.412Zm4.302 2.903 2.971-2.948-1.408-1.42-2.972 2.948 1.409 1.42ZM9.333 8v4.667h2V8h-2Z"
                      ></path>
                    </g>
                  </svg>
                </button>

                <div className="absolute bg-black left-0 top-8 text-gray-900 z-10 p-2 w-24 rounded-md group-hover:block hidden">
                  <div className="p-2 rounded-md text-gray-200 text-sm hover:bg-gray-700 cursor-pointer">
                    glb
                  </div>
                  <div className="p-2 rounded-md text-gray-200 text-sm hover:bg-gray-700 cursor-pointer">
                    obj
                  </div>
                  <div className="p-2 rounded-md text-gray-200 text-sm hover:bg-gray-700 cursor-pointer">
                    fbx
                  </div>
                  <div className="p-2 rounded-md text-gray-200 text-sm hover:bg-gray-700 cursor-pointer">
                    usd
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="relative group">
                <div className="flex gap-2 items-center text-white py-1  px-2 border border-white rounded-md text-sm">
                  <img
                    src="https://www.sudo.ai/imgs/3dgen/Credits.png"
                    alt=""
                    className="w-4"
                  />
                  <div>40</div>
                </div>
                <div className="absolute w-60 bg-black top-10 rounded-md p-2 group-hover:block hidden">
                  <div className="profile-top border-2 rounded-md border-teal-300 p-4 bg-teal-300/10">
                    <div className="text-gray-400 text-sm text-center mb-4">
                      Current Plan
                    </div>

                    <div className="flex justify-center divide-x-2 gap-2">
                      <div className="text-green-400">Free</div>
                      <div className="flex gap-2 items-center text-white p-1 text-sm">
                        <img
                          src="https://www.sudo.ai/imgs/3dgen/Credits.png"
                          alt=""
                          className="w-6"
                        />
                        <div>
                          40 <span>left</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button className="text-white bg-blue-700 font-semibold p-2 rounded-md mt-4 text-sm">
                        Upgrade Now
                      </button>
                    </div>
                  </div>

                  <button className="flex gap-2 items-center text-white p-2 border border-white rounded-md text-sm justify-center mt-4 font-semibold w-full">
                    <img
                      src="https://www.sudo.ai/imgs/3dgen/Credits.png"
                      alt=""
                      className="w-6"
                    />
                    <div>Get Credit</div>
                  </button>
                </div>
              </div>

              <div className="relative group">
                <div className="flex justify-center items-center text-white w-8 h-8 rounded-full text-sm bg-blue-700">
                  <IoPerson className="text-blue-300 text-2xl" />
                </div>

                <div className="absolute w-60 bg-black top-10 rounded-md p-2 group-hover:block hidden">
                  <div className="flex justify-between items-center font-semibold text-sm">
                    <div className="text-white">janedoe@doe.com</div>
                    <div className="text-green-300">Free</div>
                  </div>
                  <button className="flex gap-2 items-center text-white py-2 px-4 border-2 border-white rounded-md text-sm mt-4 font-semibold w-full">
                    <FiLogOut />
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DROP ZONE */}
        <div className="bg-black max-w-[22rem] mt-10 relative z-10 p-2 rounded-md">
          <div className="flex text-white items-center mb-2 gap-2 text-md">
            <RiArrowLeftDoubleFill /> Generate 3d
          </div>
          <div
            {...getRootProps()}
            className="  h-32 flex justify-center items-center text-center text-gray-400 rounded-md bg-neutral-800"
          >
            <input {...getInputProps()} accept=".png,.jpg,.webp" />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p className="text-sm">
                <p className="font-semibold">
                  Drag and drop image here or click to upload
                </p>
                <p className="text-xs">
                  Supported image formats: PNG, JPG, WEBP (max. image size 10MB)
                </p>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 inset-0 h-[100vh]">
        {/* <Canvas>
          <directionalLight color="red" position={[0, 0, 5]} />
          <mesh>
            <boxGeometry args={[2, 2, 2]} />
            const [image, setimage] = useState(nulld)
            <meshStandardMaterial color={"#000000"} />
          </mesh>

          <mesh rotation={[Math.PI * -0.5, 0, 0]} position={[0, -1, 0]}>
            <planeGeometry args={[5, 5]} />
            <meshStandardMaterial color={"#FFFFFF"} />
          </mesh>
          <OrbitControls />
        </Canvas> */}
      </div>
    </div>
  );
};

export default Home;
