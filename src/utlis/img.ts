export async function getAlbumImages(imgId: string) {
	// 1. List all img files from collections path
	let images = import.meta.glob<{ default: ImageMetadata }>(
	  "/src/content/img/**/*.{jpeg,jpg}"
	);
  
	// 2. Filter images by imgId
	images = Object.fromEntries(
	  Object.entries(images).filter(([key]) => key.includes(imgId))
	);
  
	// 3. Images are promises, so we need to resolve the glob promises
	const resolvedImages = await Promise.all(
	  Object.values(images).map((image) => image().then((mod) => mod.default))
	);
  
	// 4. Shuffle images in random order
	resolvedImages.sort(() => Math.random() - 0.5);
	return resolvedImages;
  }