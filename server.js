var express=require ('express')
var bp=require ('body-parser');
var app = express();
app.use(express.json());

const router =express.Router();

//database connection
const clothModel = require("./models/fashion");
const connect = require("./dbconnect");

app.get("/posts", async (req, res) => {
	const clothes = await clothModel.find();
	res.send(clothes)
})

app.post("/posts", async (req, res) => {
	const cloth = new clothModel({
		name: req.body.name,
		type: req.body.type,
	})
	await cloth.save()
	res.send(cloth)
})
/* app.put("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.content) {
			post.content = req.body.content
		}

		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
}) */

app.listen(3000,()=>{
    console.log("server is ready");
})