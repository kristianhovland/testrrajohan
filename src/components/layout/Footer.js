export default function HomePage() {
	return (
		<>
	
			<div class="homeHeader">
				<div class="headerContent">
					<img src={logo} alt="Logo" />
				</div>
				<div class="searchCenter">
					<Search />
				</div>
			</div>
		
		</>
	);
}