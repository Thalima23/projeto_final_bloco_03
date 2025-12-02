function Slide03() {
	return (
		<div className="relative h-[50vh] md:h-[70vh] flex justify-center items-center overflow-hidden">
			{/* Vídeo de fundo */}
			<video
				src="https://ik.imagekit.io/Thalima23/7754395-hd_1080_1920_30fps.webm"
				autoPlay
				loop
				muted
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover"
			/>

			{/* Overlay (sombra / marca d’água) */}
			<div className="absolute inset-0 bg-black/40 z-5"></div>
			{/* Use bg-black/20, /30, /40 conforme a intensidade desejada */}

			{/* Conteúdo acima */}
			<div
				className="
          relative z-10
          container 
          grid 
          grid-cols-1 md:grid-cols-2
          text-white
        "
			>
				<div
					className="
            flex 
            flex-col 
            gap-2 md:gap-4
            items-center 
            justify-center 
            py-2 md:py-4
          "
				>
					<h2
						className="
              text-3xl md:text-4xl 
              font-bold
              text-center
            "
					>
						Só hoje!
					</h2>

					<p className="text-lg md:text-3xl text-center">
						Dermocosméticos com até 35% de desconto!
					</p>
				</div>

				
				</div>
			</div>
		
	)
}

export default Slide03