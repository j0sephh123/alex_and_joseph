import matter from "gray-matter";
import {promises as fs} from "fs";

export const parseMdFile = async(fileName) => {
	const string = await import (`./content/${fileName}`)
	const { content, data } = matter(string.default)

	return { content, data }
}

export const scanDir = dirName => {
	return fs.readdir(`${process.cwd()}/${dirName}`);
}