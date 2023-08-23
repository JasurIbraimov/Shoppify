import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
    name: g.string().length({ min: 2, max: 20 }),
    email: g.string().unique(),
    avatarUrl: g.url(),
    description: g.string().length({ max: 500 }).optional(),
    favorites: g
        .relation(() => Product)
        .list()
        .optional(),
});

const Product = g.model("Product", {
    title: g.string().length({ min: 3, max: 100 }),
    description: g.string().length({ max: 500 }).optional(),
    image: g.url(),
    category: g.string().search(),
    createdBy: g.relation(() => User),
    price: g.float(),
    discount: g.int().default(0)
});


const jwt = auth.JWT({
    issuer: "grafbase",
    secret: "",
})
export default config({
    schema: g,
});
