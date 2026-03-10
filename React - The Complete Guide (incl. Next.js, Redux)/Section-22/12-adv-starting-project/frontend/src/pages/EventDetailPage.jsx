import { redirect, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <>
      <EventItem event={data.event} />;
      <EventsList events />
    </>
  );
}

export function loadEvent(id) {}

export async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    new Response(JSON.stringify({ message: "Could not fetch events." }), {
      status: 500,
    });
  }
  else {
    const resData = await response.json();
    return resData.event;
  }
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json({ message: "Error" }, { status: 500 });
  } else {
    return response;
  }
}

export async function action({ params, request }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Error" }, { status: 500 });
  }

  return redirect("/events");
}
