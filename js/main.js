import foo from "./foo.js";

document.body.onload = async () => {
	const dynamicImport = import("./solution/main.js");
	const module = await dynamicImport;
  console.log(foo, module.default);
};
