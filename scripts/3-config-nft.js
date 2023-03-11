import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";


(async () => {
  try {
    const editionDrop = await sdk.getContract(process.env.REACT_APP_EDITION_DROP_ADDRESS, "edition-drop");
    await editionDrop.createBatch([
      {
        name: "ReaderDAO Bookmark",
        description: "This NFT will give you access to ReaderDAO!",
        image: readFileSync("scripts/assets/readerdao_nft.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();