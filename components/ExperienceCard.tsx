import Image from "next/image";
import React from "react";
import logo from "../public/carnationLogo.png";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-1 md:space-y-4  w-[500px] md:w-[600px] p-7 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 ">
      <motion.div
        className="w-[180px] md:w-[230px]"
        initial={{ y: -100, opacity: 0 }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
      >
        <Image
          src={logo}
          className=" object-cover object-center"
          alt="logo"
        ></Image>
      </motion.div>
      <div className="px-0 md:px-10 sm:mt-1 ">
        <h4 className="text-2xl font-light"> Software Engineer - 1</h4>
        <p className="uppercase font-bold mt-1 text-[14px]">
          Carnation InfoTech
        </p>
        <div className="flex space-x-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="38"
            height="38"
            viewBox="0 0 48 48"
          >
            <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
            ></path>
            <path
              fill="#EEE"
              d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="38"
            height="38"
            viewBox="0 0 48 48"
          >
            <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
            <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
            <path
              fill="#FFF"
              d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
            ></path>
            <path
              fill="#EEE"
              d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="38"
            height="38"
            viewBox="0 0 48 48"
          >
            <path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
            <path
              fill="#000001"
              d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path
              fill="#8bb7f0"
              d="M17.5,15c0,1.382-1.118,2.5-2.5,2.5s-2.5-1.118-2.5-2.5s1.118-2.5,2.5-2.5S17.5,13.618,17.5,15z"
            ></path>
            <path
              fill="#4e7ab5"
              d="M15,18c-1.654,0-3-1.346-3-3s1.346-3,3-3s3,1.346,3,3S16.654,18,15,18z M15,13c-1.103,0-2,0.897-2,2 s0.897,2,2,2s2-0.897,2-2S16.103,13,15,13z"
            ></path>
            <g>
              <path
                fill="#8bb7f0"
                d="M29.5,15c0-2.152-2.095-3.993-5.455-5.166c0.748-3.603,0.877-6.337-1.688-7.856 c-0.535-0.316-1.145-0.477-1.812-0.477c-1.647,0-3.589,1.002-5.544,2.746c-1.956-1.746-3.899-2.749-5.547-2.749 c-0.667,0-1.276,0.161-1.811,0.477C6.018,2.939,4.971,5.092,5.955,9.834C2.595,11.008,0.5,12.848,0.5,15s2.095,3.992,5.455,5.166 c-0.779,3.755-0.724,6.428,1.689,7.859c0.535,0.316,1.145,0.477,1.812,0.477c1.647,0,3.59-1.002,5.545-2.748 c1.955,1.744,3.897,2.745,5.544,2.745h0.001c0.667,0,1.276-0.161,1.812-0.477c2.39-1.416,2.49-3.994,1.688-7.856 C27.405,18.993,29.5,17.152,29.5,15z M21.337,3.699c1.513,0.896,1.325,2.682,0.767,5.563c-1.002-0.242-2.087-0.428-3.231-0.56 c-0.787-1.123-1.605-2.143-2.435-3.037c1.618-1.42,3.086-2.163,4.107-2.163C20.854,3.501,21.112,3.566,21.337,3.699z M21.2,17.474 c0.157,0.443,0.294,0.874,0.419,1.298c-0.416,0.102-0.849,0.195-1.298,0.278c0.135-0.227,0.271-0.452,0.402-0.686 C20.886,18.071,21.043,17.772,21.2,17.474z M18.979,17.382c-0.403,0.716-0.818,1.383-1.236,2.018 c-0.878,0.078-1.793,0.123-2.743,0.123c-0.952,0-1.87-0.045-2.749-0.123c-0.418-0.633-0.83-1.305-1.232-2.018 c-0.452-0.803-0.856-1.6-1.216-2.382c0.359-0.782,0.764-1.579,1.216-2.382c0.402-0.713,0.814-1.385,1.233-2.018 c0.88-0.078,1.797-0.123,2.749-0.123c0.952,0,1.868,0.045,2.748,0.123c0.418,0.633,0.83,1.305,1.232,2.018 c0.452,0.803,0.857,1.6,1.216,2.382C19.836,15.782,19.431,16.579,18.979,17.382z M15.001,22.936 c-0.408-0.44-0.819-0.922-1.231-1.439c0.406,0.014,0.813,0.026,1.23,0.026c0.417,0,0.825-0.012,1.231-0.026 C15.819,22.016,15.409,22.496,15.001,22.936z M9.276,18.363c0.131,0.233,0.267,0.458,0.402,0.685 c-0.449-0.083-0.881-0.176-1.297-0.278c0.125-0.423,0.262-0.854,0.418-1.297C8.956,17.773,9.112,18.071,9.276,18.363z M8.799,12.526c-0.156-0.442-0.293-0.873-0.418-1.297c0.416-0.101,0.848-0.194,1.298-0.278c-0.135,0.227-0.271,0.452-0.402,0.685 C9.112,11.929,8.956,12.227,8.799,12.526z M15.001,7.066c0.407,0.439,0.818,0.921,1.228,1.438C15.823,8.489,15.416,8.477,15,8.477 c-0.416,0-0.823,0.012-1.229,0.026C14.182,7.986,14.593,7.505,15.001,7.066z M20.722,11.637c-0.131-0.234-0.267-0.458-0.402-0.686 c0.45,0.083,0.882,0.176,1.299,0.278c-0.125,0.424-0.262,0.855-0.419,1.298C21.043,12.228,20.886,11.929,20.722,11.637z M8.663,3.696c0.225-0.133,0.483-0.198,0.791-0.198c1.022,0,2.491,0.744,4.11,2.165c-0.83,0.894-1.649,1.914-2.437,3.038 C9.983,8.834,8.898,9.02,7.896,9.262C7.115,5.232,8.076,4.045,8.663,3.696z M2.5,15c0-1.128,1.501-2.322,3.961-3.202 C6.776,12.855,7.167,13.93,7.624,15c-0.456,1.07-0.847,2.145-1.163,3.202C4.001,17.322,2.5,16.128,2.5,15z M8.663,26.304 c-1.363-0.808-1.355-2.531-0.767-5.566c1.002,0.242,2.086,0.428,3.23,0.56c0.789,1.126,1.61,2.148,2.442,3.044 C11.474,26.181,9.63,26.877,8.663,26.304z M21.337,26.301c-0.225,0.133-0.483,0.198-0.792,0.198c-1.022,0-2.49-0.743-4.108-2.162 c0.83-0.894,1.648-1.914,2.436-3.038c1.144-0.133,2.229-0.318,3.231-0.56C22.712,23.881,22.678,25.507,21.337,26.301z M23.538,18.202c-0.316-1.056-0.707-2.132-1.163-3.202c0.457-1.07,0.848-2.146,1.164-3.202C25.999,12.678,27.5,13.872,27.5,15 C27.5,16.128,25.999,17.322,23.538,18.202z"
              ></path>
              <path
                fill="#4e7ab5"
                d="M9.455,29.001c-0.758,0-1.452-0.184-2.066-0.547c-2.36-1.399-2.775-3.831-2.007-7.965 C1.955,19.198,0,17.212,0,15s1.955-4.198,5.382-5.49C4.428,4.377,5.797,2.489,7.389,1.545c1.944-1.151,4.709-0.434,7.612,2.038 c2.901-2.47,5.661-3.187,7.61-2.036c2.51,1.486,2.747,3.982,2.007,7.962C28.045,10.802,30,12.789,30,15s-1.955,4.198-5.383,5.49 c0.789,4.243,0.334,6.577-2.006,7.962c-1.949,1.151-4.709,0.434-7.611-2.035C13.013,28.109,11.103,29.001,9.455,29.001z M9.454,1.999c-0.576,0-1.1,0.137-1.556,0.407C6.056,3.498,5.753,6.403,6.444,9.732l0.09,0.429L6.12,10.306 C2.866,11.442,1,13.153,1,15s1.866,3.558,5.12,4.694l0.414,0.145l-0.09,0.429c-0.486,2.342-1.175,5.768,1.454,7.327 c1.622,0.959,4.134,0.14,6.769-2.213L15,25.084l0.333,0.297c2.636,2.351,5.147,3.168,6.769,2.211 c2.606-1.544,1.962-4.875,1.453-7.324l-0.09-0.429l0.414-0.145C27.134,18.558,29,16.847,29,15s-1.866-3.558-5.12-4.694 l-0.414-0.145l0.09-0.429c0.455-2.189,1.328-5.677-1.454-7.324c-1.621-0.959-4.133-0.14-6.768,2.212l-0.333,0.297L14.668,4.62 C12.774,2.93,10.923,1.999,9.454,1.999z M9.455,26.999c-0.397,0-0.75-0.089-1.047-0.265c-1.57-0.931-1.647-2.764-1.004-6.091 l0.1-0.514l0.509,0.123c0.961,0.232,2.027,0.417,3.17,0.549l0.223,0.026l0.129,0.184c0.775,1.105,1.583,2.111,2.399,2.99 l0.35,0.376l-0.386,0.339C12.223,26.189,10.645,26.999,9.455,26.999z M8.295,21.343c-0.488,2.985-0.297,3.985,0.623,4.531 c0.141,0.083,0.321,0.125,0.537,0.125c0.851,0,2.071-0.616,3.395-1.703c-0.682-0.766-1.354-1.613-2.005-2.527 C9.944,21.658,9.09,21.515,8.295,21.343z M20.545,26.999c-1.181,0-2.757-0.812-4.438-2.286l-0.386-0.339l0.349-0.377 c0.816-0.88,1.621-1.884,2.394-2.985l0.129-0.184l0.223-0.026c1.144-0.133,2.211-0.318,3.171-0.55l0.509-0.123l0.1,0.514 c0.665,3.435,0.545,5.171-1.003,6.088C21.287,26.912,20.945,26.999,20.545,26.999z M17.155,24.291 c1.672,1.374,3.211,2.005,3.927,1.581c0.902-0.534,1.128-1.434,0.622-4.528c-0.795,0.172-1.649,0.315-2.551,0.426 C18.505,22.68,17.835,23.525,17.155,24.291z M15.001,23.671l-0.366-0.395c-0.409-0.441-0.832-0.935-1.256-1.468l-0.673-0.847 l1.081,0.037c0.801,0.026,1.627,0.027,2.426,0l1.08-0.038l-0.671,0.848c-0.413,0.523-0.835,1.017-1.254,1.469L15.001,23.671z M15,20.023c-0.922,0-1.861-0.042-2.794-0.125l-0.239-0.021l-0.133-0.201c-0.44-0.667-0.861-1.355-1.251-2.048 c-0.444-0.789-0.859-1.602-1.234-2.418L9.253,15l0.096-0.208c0.375-0.816,0.79-1.63,1.234-2.419 c0.388-0.689,0.809-1.378,1.251-2.047l0.133-0.201l0.239-0.021c1.862-0.166,3.716-0.167,5.586,0l0.24,0.021l0.133,0.201 c0.438,0.664,0.859,1.354,1.25,2.048c0.444,0.789,0.859,1.602,1.234,2.418L20.745,15l-0.096,0.208 c-0.375,0.816-0.79,1.63-1.234,2.419c-0.379,0.672-0.789,1.342-1.255,2.048l-0.133,0.201l-0.24,0.021 C16.859,19.981,15.921,20.023,15,20.023z M12.536,18.922c1.646,0.134,3.281,0.134,4.922,0.001c0.398-0.612,0.755-1.199,1.086-1.786 c0.393-0.698,0.763-1.416,1.101-2.137c-0.338-0.721-0.708-1.439-1.101-2.136c-0.34-0.604-0.703-1.204-1.081-1.786 c-1.652-0.134-3.282-0.134-4.927,0c-0.381,0.586-0.744,1.186-1.082,1.785c-0.393,0.698-0.763,1.416-1.101,2.137 c0.338,0.721,0.708,1.439,1.101,2.136C11.793,17.738,12.156,18.338,12.536,18.922z M10.665,19.741l-1.079-0.2 c-0.458-0.085-0.898-0.18-1.323-0.284l-0.51-0.125l0.148-0.503c0.127-0.432,0.267-0.871,0.426-1.322l0.382-1.082l0.533,1.017 c0.153,0.294,0.309,0.588,0.47,0.876c0.092,0.162,0.186,0.321,0.279,0.479L10.665,19.741z M19.327,19.74l0.642-1.08 c0.106-0.18,0.213-0.359,0.317-0.543c0.159-0.282,0.31-0.569,0.46-0.857l0.531-1.014l0.393,1.06 c0.161,0.452,0.301,0.892,0.428,1.323l0.148,0.503l-0.51,0.125c-0.425,0.104-0.866,0.199-1.326,0.284L19.327,19.74z M23.21,18.851 l-0.151-0.505c-0.307-1.029-0.691-2.089-1.144-3.149L21.831,15l0.084-0.196c0.448-1.048,0.833-2.108,1.146-3.149l0.15-0.504 l0.496,0.177C26.436,12.303,28,13.641,28,15c0,1.358-1.565,2.697-4.294,3.673L23.21,18.851z M22.918,15 c0.357,0.855,0.673,1.709,0.941,2.547C26.166,16.634,27,15.619,27,15s-0.834-1.634-3.141-2.547 C23.589,13.299,23.273,14.153,22.918,15z M6.789,18.85l-0.496-0.178C3.564,17.697,2,16.359,2,15s1.564-2.697,4.293-3.672 l0.496-0.178l0.151,0.505c0.31,1.038,0.694,2.097,1.144,3.148L8.168,15l-0.084,0.196c-0.449,1.052-0.834,2.111-1.144,3.148 L6.789,18.85z M6.14,12.453C3.834,13.366,3,14.381,3,15s0.834,1.634,3.14,2.547C6.409,16.703,6.725,15.85,7.081,15 C6.725,14.15,6.409,13.297,6.14,12.453z M8.709,13.774l-0.382-1.082c-0.159-0.451-0.299-0.89-0.426-1.322l-0.148-0.503l0.51-0.125 c0.425-0.104,0.865-0.198,1.325-0.284l1.082-0.201l-0.654,1.105c-0.103,0.171-0.204,0.342-0.304,0.519 c-0.161,0.287-0.316,0.581-0.47,0.875L8.709,13.774z M21.287,13.772l-0.531-1.014c-0.16-0.306-0.311-0.594-0.47-0.876 c-0.104-0.184-0.211-0.363-0.317-0.543l-0.642-1.08l1.083,0.2c0.46,0.085,0.901,0.18,1.326,0.284l0.51,0.125l-0.148,0.503 c-0.127,0.432-0.267,0.872-0.428,1.323L21.287,13.772z M7.504,9.871l-0.1-0.514C6.569,5.035,7.612,3.738,8.408,3.266 c1.208-0.713,3.235,0.047,5.485,2.022l0.386,0.339l-0.35,0.377c-0.814,0.877-1.62,1.882-2.394,2.985l-0.129,0.184l-0.223,0.026 c-1.144,0.132-2.21,0.317-3.172,0.549L7.504,9.871z M9.454,3.999c-0.218,0-0.389,0.041-0.536,0.128 C8.745,4.229,7.641,4.662,8.295,8.657c0.796-0.173,1.651-0.315,2.552-0.426c0.648-0.912,1.319-1.757,1.999-2.521 C11.53,4.631,10.284,3.999,9.454,3.999z M22.495,9.871l-0.509-0.123c-0.96-0.232-2.027-0.417-3.171-0.55l-0.223-0.026l-0.129-0.184 c-0.776-1.106-1.581-2.11-2.393-2.984l-0.351-0.377l0.387-0.339c2.251-1.975,4.279-2.732,5.484-2.02 c1.721,1.019,1.618,2.915,1.003,6.088L22.495,9.871z M19.153,8.231c0.901,0.111,1.756,0.254,2.551,0.426 c0.464-2.827,0.445-3.897-0.622-4.528c-0.717-0.424-2.254,0.207-3.927,1.582C17.833,6.472,18.503,7.317,19.153,8.231z M12.706,9.039l0.674-0.848c0.429-0.538,0.851-1.031,1.255-1.466l0.367-0.396l0.366,0.396c0.414,0.448,0.835,0.941,1.252,1.466 l0.673,0.847l-1.081-0.037c-0.801-0.026-1.623-0.026-2.424,0L12.706,9.039z"
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="38"
            height="38"
            viewBox="0 0 48 48"
          >
            <path
              fill="#7e57c2"
              d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
            ></path>
            <path
              fill="#7e57c2"
              d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
            ></path>
            <path
              fill="#7e57c2"
              d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="38"
            height="38"
            viewBox="0 0 48 48"
          >
            <path
              fill="#F4511E"
              d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
            ></path>
          </svg>
        </div>
        <p className="uppercase py-3 text-gray-300 text-[12px] ">
          June 1st 2021 - Present
        </p>
        <ul className="text-left">
          <li className="list-disc space-y-4 ml-5 text-sm">
            Worked on two e-commerce websites for US based clients.
          </li>
          <li className="list-disc space-y-4 ml-5 text-sm">
            Working in agile methodology, creating the required features.
          </li>
          <li className="list-disc space-y-4 ml-5 text-sm">
            Collaborating with other developers to plan and implement the new
            feature precisely .
          </li>
          <li className="list-disc space-y-4 ml-5 text-sm">
            Daily maintenance and debugging the issues reported by QA.
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
