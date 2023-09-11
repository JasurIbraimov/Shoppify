import { g, auth, config } from "@grafbase/sdk";
// @ts-ignore
const Product = g
    .model("Product", {
        title: g.string().length({ min: 3, max: 100 }),
        description: g.string().length({ max: 500 }).optional(),
        image: g.url(),
        category: g.string().search(),
        createdBy: g.relation(() => User),
        price: g.float(),
        discount: g.int().default(0),
    })
    .auth((rules) => {
        rules.public().read();
        rules.private().create().delete().update();
    });

// @ts-ignore
const User = g
    .model("User", {
        name: g.string().length({ min: 2, max: 20 }),
        email: g.string().unique(),
        avatarUrl: g.url(),
        products: g
            .relation(() => Product)
            .list()
            .optional(),
    })
    .auth((rules) => rules.public().read());


const jwt = auth.JWT({
    issuer: "grafbase",
    secret: g.env("NEXTAUTH_SECRET"),
});
export default config({
    schema: g,
    auth: {
        rules: (rules) => rules.private(),
        providers: [jwt],
    },
});
