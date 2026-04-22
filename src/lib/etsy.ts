import axios from "axios";

const ETSY_BASE_URL = "https://openapi.etsy.com/v3";

const etsyClient = axios.create({
  baseURL: ETSY_BASE_URL,
  headers: {
    "x-api-key": process.env.ETSY_API_KEY,
    Authorization: `Bearer ${process.env.ETSY_ACCESS_TOKEN}`,
  },
});

export async function getEtsyOrders(limit = 25) {
  const shopId = process.env.ETSY_SHOP_ID;
  const { data } = await etsyClient.get(
    `/application/shops/${shopId}/receipts?limit=${limit}&was_paid=true`
  );
  return data.results ?? [];
}

export async function getEtsyListings(limit = 25) {
  const shopId = process.env.ETSY_SHOP_ID;
  const { data } = await etsyClient.get(
    `/application/shops/${shopId}/listings/active?limit=${limit}`
  );
  return data.results ?? [];
}

export async function createEtsyListing(listing: {
  title: string;
  description: string;
  price: number;
  quantity: number;
  tags: string[];
}) {
  const shopId = process.env.ETSY_SHOP_ID;
  const { data } = await etsyClient.post(
    `/application/shops/${shopId}/listings`,
    {
      title: listing.title,
      description: listing.description,
      price: listing.price,
      quantity: listing.quantity,
      who_made: "i_did",
      when_made: "made_to_order",
      taxonomy_id: 2078,
      tags: listing.tags.slice(0, 13),
      type: "download",
      is_digital: true,
    }
  );
  return data;
}

export async function updateEtsyListing(listingId: string, updates: Record<string, unknown>) {
  const { data } = await etsyClient.patch(
    `/application/listings/${listingId}`,
    updates
  );
  return data;
}
