enum ServerPath {
	Logo = `resource/logo.png`,
	CharacterHappy = `resource/foam_happy.png`,
	CharacterSad = `resource/foam_sad.png`,
}

namespace ServerPath {
	export function getFullPath(path: ServerPath) {
		return process.env.SERVER + path;
	}
}

export default ServerPath;
