export default {
  async fetch(request: Request): Promise<Response> {
    let data = {
      ip: request.headers.get("CF-Connecting-IP"),
      colo: request.cf?.colo,
      city: request.cf?.city,
      country: request.cf?.country,
      continent: request.cf?.continent,
      latitude: request.cf?.latitude,
      longitude: request.cf?.longitude,
      postalCode: request.cf?.postalCode,
      metroCode: request.cf?.metroCode,
      region: request.cf?.region,
      regionCode: request.cf?.regionCode,
      timezone: request.cf?.timezone,
    };

    return new Response(JSON.stringify(data), {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
