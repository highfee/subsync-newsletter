import dbConnect from "@/lib/dbConnect";
import Categories from "@/models/categories";

export const GET = async () => {
  await dbConnect();

  try {
    const categories = await Categories.aggregate([{ $sample: { size: 50 } }]);

    return new Response(JSON.stringify(categories), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify(error, "Error getting categories"), {
      status: 500,
    });
  }
};
