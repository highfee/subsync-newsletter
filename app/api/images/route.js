import puppeteer from "puppeteer";

export async function POST(request) {
  const body = await request.json();

  const { emailHTML } = body;

  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.setViewport({ width: 1000, height: 600 });
    await page.setContent(emailHTML);

    // await page.waitForTimeout(5000);

    const screenshot = await page.screenshot({ type: "png" });

    await browser.close();

    return new Response(
      JSON.stringify(`data:image/png;base64,${screenshot.toString("base64")}`),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}
