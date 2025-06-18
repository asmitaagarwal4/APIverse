import Background from "./components/background";
import Header from "./components/Header";
import asmitaImg from "./assets/asmita.jpg";
import ritiImg from "./assets/riti.jpeg";
import yadubirImg from "./assets/yadubir.jpg";
import rishitaImg from "./assets/rishita.jpeg";

const teamMembers = [
	{
		name: 'Asmita Agarwal',
		role: 'Frontend Engineer',
		image: asmitaImg,
		linkedin: 'https://www.linkedin.com/in/asmita-agarwal/',
	},
	{
		name: 'Riti Sinha',
		role: 'Backend Developer',
		image: ritiImg,
		linkedin: 'https://www.linkedin.com/in/sinhariti/',
	},
	{
		name: 'Yadubir Jha',
		role: 'AI Engineer',
		image: yadubirImg,
		linkedin: 'https://www.linkedin.com/in/yadubir-jha/',
	},
	{
		name: 'Rishita P Saraf',
		role: 'DevOps Specialist',
		image: rishitaImg,
		linkedin: 'https://www.linkedin.com/in/rishita-priyadarshini-saraf/',
	},
];

function Contact() {
	return (
		<div className="relative">
			<Background />
			<Header />
			<div className="max-w-5xl mx-auto px-6 py-16 text-purple-300">
				<h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
				<p className="text-lg text-center mb-12 max-w-3xl mx-auto">
					Meet the team behind APIVerse! Feel free to connect with us on LinkedIn.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
					{teamMembers.map((member, idx) => (
						<div
							key={idx}
							className="border hover:shadow-[0_10px_40px_rgba(127,92,255,0.3)] transition-all duration-300 shadow-md p-6 rounded-2xl backdrop-blur-sm text-center"
						>
							<img
								src={member.image}
								alt={member.name}
								className="w-24 h-24 mx-auto rounded-full mb-4 object-cover border-2 border-purple-400"
							/>
							<h2 className="text-xl font-semibold text-white">{member.name}</h2>
							{/* <p className="text-gray-400 mb-2">{member.role}</p> */}
							<a
								href={member.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-400 hover:text-blue-300 text-sm underline"
							>
								LinkedIn Profile
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Contact;
