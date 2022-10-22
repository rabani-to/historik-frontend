import { Fragment } from "react"
import Head from "next/head"
import Layout from "@/components/Layout"
import * as mapboxgl from "mapbox-gl"
import { useRef } from "react"
import { useEffect } from "react"
import "mapbox-gl/dist/mapbox-gl.css"
import { useRouter } from "next/router"

function Map() {
  const router = useRouter()
  const mapRef = useRef(null)

  useEffect(() => {
    ;(mapboxgl.accessToken as any) = process.env.NEXT_PUBLIC_ACCESS_TOKEN
    const element = document.createElement("div")
    element.innerHTML = "Hospital Infanta Sofia"
    element.className = "bg-white p-4 rounded-lg"
    element.onclick = () => {
      router.push("/hospital/1")
    }
    const marker = new mapboxgl.Marker({
      element: element,
    })
    const map = new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/d3portillo/ck5fl0lmf1yya1ilonksp890u",
      center: [-3.6641067, 40.5160408], // starting position [lng, lat]
      zoom: 9, // starting zoom
    })

    marker.setLngLat(map.getCenter()).addTo(map)
  })

  return (
    <div className="w-full flex top-10 items-end relative min-h-screen overflow-hidden">
      <div ref={mapRef} className="inset-0 absolute w-screen h-screen" />
    </div>
  )
}

export default function HospitalList() {
  return (
    <Fragment>
      <Head>
        <title>Historik</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout className="overflow-hidden">
        <Map />
      </Layout>
    </Fragment>
  )
}
