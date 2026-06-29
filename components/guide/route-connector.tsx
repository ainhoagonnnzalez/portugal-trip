export function RouteConnector() {
  return (
    <div className="route-connector" aria-hidden>
      <div className="route-col-time" />
      <div className="route-col-main flex justify-center">
        <span className="text-itinerary-arrow">↓</span>
      </div>
      <div className="route-col-meta" />
    </div>
  );
}
