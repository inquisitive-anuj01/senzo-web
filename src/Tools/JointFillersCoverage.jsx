import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useNavigate } from "react-router-dom"

const jointFillerProducts = [
  {
    id: "1",
    name: "EPOXY GROUT 1KG",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146319/Epoxy_Grout_1kg___iymtto.png",
    coverage: 0.15,
  },
  {
    id: "2",
    name: "TILE GROUT",
    image: "https://res.cloudinary.com/dzvwqhzgf/image/upload/v1757146329/Tile_Grout_nd7www.png",
    coverage: 0.12,
  },
  
]

function JointFillersCoverage() {

  const navigate = useNavigate()
  // Area calculation inputs
  const [totalArea, setTotalArea] = useState("")
  const [areaUnit, setAreaUnit] = useState("sqft")
  const [tileWidth, setTileWidth] = useState("")
  const [tileLength, setTileLength] = useState("")

  // Direct length input
  const [totalLength, setTotalLength] = useState("")
  const [lengthUnit, setLengthUnit] = useState("ft")

  // Joint specifications
  const [jointWidth, setJointWidth] = useState("")
  const [tileThickness, setTileThickness] = useState("")

  // Calculated values
  const [calculatedLength, setCalculatedLength] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [errors, setErrors] = useState({})

  // Validation function
  const validateInputs = () => {
    const newErrors = {}

    // Check if we have either area calculation OR direct length
    const hasAreaInputs = totalArea && tileWidth && tileLength
    const hasDirectLength = totalLength

    if (!hasAreaInputs && !hasDirectLength) {
      newErrors.general = "Please provide either area details OR total length"
      setErrors(newErrors)
      return false
    }

    // Validate area inputs if provided
    if (hasAreaInputs) {
      const area = Number.parseFloat(totalArea)
      const width = Number.parseFloat(tileWidth)
      const length = Number.parseFloat(tileLength)

      if (area <= 0) newErrors.totalArea = "Area must be greater than 0"
      if (width <= 0 || width > 5000) newErrors.tileWidth = "Width must be between 1-5000mm"
      if (length <= 0 || length > 5000) newErrors.tileLength = "Length must be between 1-5000mm"
    }

    // Validate direct length if provided
    if (hasDirectLength) {
      const length = Number.parseFloat(totalLength)
      if (length <= 0) newErrors.totalLength = "Length must be greater than 0"
    }

    // Validate joint specifications
    if (!jointWidth) {
      newErrors.jointWidth = "Joint width is required"
    } else {
      const width = Number.parseFloat(jointWidth)
      if (width <= 0 || width > 5000) newErrors.jointWidth = "Joint width must be between 1-5000mm"
    }

    if (!tileThickness) {
      newErrors.tileThickness = "Tile thickness is required"
    } else {
      const thickness = Number.parseFloat(tileThickness)
      if (thickness <= 0 || thickness > 5000) newErrors.tileThickness = "Tile thickness must be between 1-5000mm"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Calculate joint filler length
  const calculateJointLength = () => {
    if (totalLength) {
      // Direct length input
      const length = Number.parseFloat(totalLength)
      return lengthUnit === "ft" ? length * 0.3048 : length // Convert to meters
    } else if (totalArea && tileWidth && tileLength) {
      // Calculate from area
      const area = Number.parseFloat(totalArea)
      const width = Number.parseFloat(tileWidth) / 1000 // Convert mm to m
      const length = Number.parseFloat(tileLength) / 1000 // Convert mm to m

      // Convert area to square meters if needed
      const areaInSqM = areaUnit === "sqft" ? area * 0.092903 : area

      // Calculate number of tiles
      const tileArea = width * length
      const numberOfTiles = areaInSqM / tileArea

      // Calculate perimeter of all tiles (simplified calculation)
      const tilesPerRow = Math.sqrt(numberOfTiles * (width / length))
      const tilesPerCol = numberOfTiles / tilesPerRow

      // Total joint length = horizontal joints + vertical joints
      const horizontalJoints = tilesPerRow * (tilesPerCol - 1) * width
      const verticalJoints = tilesPerCol * (tilesPerRow - 1) * length

      return horizontalJoints + verticalJoints
    }
    return 0
  }

  // Calculate required quantities for each product
  const calculateRequiredQuantity = (product) => {
    if (calculatedLength === 0) return 0

    const jointWidthM = Number.parseFloat(jointWidth) / 1000 // Convert mm to m
    const tileThicknessM = Number.parseFloat(tileThickness) / 1000 // Convert mm to m

    // Volume of joint filler needed = length × width × depth
    const volume = calculatedLength * jointWidthM * tileThicknessM

    // Convert volume to weight (assuming density of ~1.5 kg/L for joint filler)
    const weightKg = volume * 1500 // 1500 kg/m³

    return Math.ceil(weightKg * 100) / 100 // Round up to 2 decimal places
  }


 const openWhatsApp = () => {
    const phoneNumber = "+918700630602";
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  // Effect to recalculate when inputs change
  useEffect(() => {
    if (validateInputs()) {
      const length = calculateJointLength()
      setCalculatedLength(length)
      setShowResults(length > 0 && jointWidth && tileThickness)
    } else {
      setShowResults(false)
      setCalculatedLength(0)
    }
  }, [totalArea, areaUnit, tileWidth, tileLength, totalLength, lengthUnit, jointWidth, tileThickness])

  return (
    <div className="w-full min-h-screen mx-auto bg-gray-200 overflow-hidden p-6 rounded-b-3xl mb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-xl md:text-5xl font-semibold text-center text-black mb-2">Joint Filler Coverage Calculator</h1>
          <p className="text-center text-gray-800 mb-12">
            A tool to estimate the right quantity of tile joint filler for your requirements.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:h-[600px]">
          {/* Left Panel - Input Form (60% width) */}
          <div className="lg:w-3/5">
            <Card className="bg-white text-black h-full">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Step 1: Area Input and Length Input Side by Side */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <h3 className="text-lg font-semibold">Enter Area, Tile Width & Length</h3>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:gap-8 lg:items-start">
                    {/* Area Calculation Section */}
                    <div className="lg:w-1/2 space-y-4">
                      <div>
                        <Label htmlFor="totalArea" className="text-black mb-2 block text-sm">
                          Total Area
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="totalArea"
                            type="number"
                            value={totalArea}
                            onChange={(e) => setTotalArea(e.target.value)}
                            placeholder="Enter total area"
                            className="bg-white text-black transition-all duration-200   text-sm outline-none"
                          />
                          <Select value={areaUnit} onValueChange={setAreaUnit}>
                            <SelectTrigger className="w-20 bg-white text-black text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sqft">Sq.Ft</SelectItem>
                              <SelectItem value="sqm">Sq.M</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {errors.totalArea && <p className="text-red-400 text-xs mt-1">{errors.totalArea}</p>}
                      </div>

                      <div>
                        <Label htmlFor="tileWidth" className="text-black mb-2 block text-sm">
                          Tile Width (1-5000)
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="tileWidth"
                            type="number"
                            value={tileWidth}
                            onChange={(e) => setTileWidth(e.target.value)}
                            placeholder="enter tile width"
                            min="1"
                            max="5000"
                            className="bg-white text-black transition-all duration-200 focus:ring-2 focus:ring-green-500 text-sm"
                          />
                          <div className="w-12 bg-gray-200 rounded-md flex items-center justify-center text-black text-xs">
                            mm
                          </div>
                        </div>
                        {errors.tileWidth && <p className="text-red-400 text-xs mt-1">{errors.tileWidth}</p>}
                      </div>

                      <div>
                        <Label htmlFor="tileLength" className="text-black mb-2 block text-sm">
                          Tile Length (1-5000)
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="tileLength"
                            type="number"
                            value={tileLength}
                            onChange={(e) => setTileLength(e.target.value)}
                            placeholder="enter tile length"
                            min="1"
                            max="5000"
                            className="bg-white text-black transition-all duration-200 focus:ring-2 focus:ring-green-500 text-sm"
                          />
                          <div className="w-12 bg-gray-200 rounded-md flex items-center justify-center text-black text-xs">
                            mm
                          </div>
                        </div>
                        {errors.tileLength && <p className="text-red-400 text-xs mt-1">{errors.tileLength}</p>}
                      </div>
                    </div>

                    {/* OR Divider - Hidden on mobile, visible on large screens */}
                    <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:px-4">
                      <div className="w-px h-16 bg-red-500 mb-2"></div>
                      <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        OR
                      </div>
                      <div className="w-px h-16 bg-red-500 mt-2"></div>
                    </div>

                    {/* Mobile OR Divider */}
                    <div className="lg:hidden my-6">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 h-px bg-red-500"></div>
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          OR
                        </div>
                        <div className="flex-1 h-px bg-red-500"></div>
                      </div>
                    </div>

                    {/* Length Input Section */}
                    <div className="lg:w-1/2">
                      <h4 className="font-semibold mb-4 text-sm">Enter Length of Tile Joint Filler</h4>
                      <div>
                        <Label htmlFor="totalLength" className="text-black mb-2 block text-sm">
                          Total Length
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="totalLength"
                            type="number"
                            value={totalLength}
                            onChange={(e) => setTotalLength(e.target.value)}
                            placeholder="0"
                            className="bg-white text-black transition-all duration-200 focus:ring-2 focus:ring-green-500 text-sm"
                          />
                          <Select value={lengthUnit} onValueChange={setLengthUnit}>
                            <SelectTrigger className="w-12 bg-white text-black text-sm">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ft">Ft</SelectItem>
                              <SelectItem value="m">M</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {errors.totalLength && <p className="text-red-400 text-xs mt-1">{errors.totalLength}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Joint Specifications */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <h3 className="text-lg font-semibold">Enter Joint Width & Tile Thickness</h3>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="jointWidth" className="text-black mb-2 block text-sm">
                        Joint Width (1-5000)
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="jointWidth"
                          type="number"
                          value={jointWidth}
                          onChange={(e) => setJointWidth(e.target.value)}
                          placeholder="Enter joint width"
                          min="1"
                          max="5000"
                          className="bg-white text-black transition-all duration-200 focus:ring-2 focus:ring-green-500 text-sm"
                        />
                        <div className="w-12 bg-gray-200 rounded-md flex items-center justify-center text-black text-xs">
                          mm
                        </div>
                      </div>
                      {errors.jointWidth && <p className="text-red-400 text-xs mt-1">{errors.jointWidth}</p>}
                    </div>

                    <div>
                      <Label htmlFor="tileThickness" className="text-black mb-2 block text-sm">
                        Tile Thickness (1-5000)
                      </Label>
                      <div className="flex gap-2">
                        <Input
                          id="tileThickness"
                          type="number"
                          value={tileThickness}
                          onChange={(e) => setTileThickness(e.target.value)}
                          placeholder="Enter tile thickness"
                          min="1"
                          max="5000"
                          className="bg-white text-black transition-all duration-200 focus:ring-2 focus:ring-green-500 text-sm"
                        />
                        <div className="w-12 bg-gray-200 rounded-md flex items-center justify-center text-black text-xs">
                          mm
                        </div>
                      </div>
                      {errors.tileThickness && <p className="text-red-400 text-xs mt-1">{errors.tileThickness}</p>}
                    </div>
                  </div>
                </div>

                {errors.general && (
                  <div className="mt-4 p-3 bg-gray-500 border border-black rounded-md">
                    <p className="text-white text-sm">{errors.general}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Panel  */}
          <div className="lg:w-2/5 ">
            <Card className="h-full bg-gray-100">
              <CardContent className="p-6 h-full flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Required Tile Joint Filler</h3>

                {!showResults ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                    <Search className="w-12 h-12 text-gray-300 mb-3 animate-pulse" />
                    <p className="text-gray-500 text-xs">
                      Fill in the requirements on the left to display the quantity required
                    </p>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col bg-gray-100">
                    <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto max-h-80">
                      {jointFillerProducts.map((product) => {
                        const requiredQty = calculateRequiredQuantity(product)
                        return (
                          <div
                            key={product.id}
                            className="text-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                          >
                            <img
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              className="w-50 h-50 mx-auto mb-2 object-contain"
                            />
                            <h4 className="font-medium text-xs mb-1 leading-tight">{product.name}</h4>
                            <p className="text-gray-600 text-xs font-semibold">{requiredQty.toFixed(2)} Kg Required</p>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t">
                      <p className="text-xs text-gray-500 text-center mb-2 leading-tight">
                        *Above quantity is basis calculations under simulated conditions. Can vary as per surface type
                        and site conditions.
                      </p>
                      <div className="flex flex-col gap-2">
                        <Button
                          onClick={openWhatsApp}
                          variant="outline"
                          size="sm"
                          className="bg-white text-black  px-4 py-2 rounded-lg shadow hover:bg-black hover:text-white border hover:border-blue-500 cursor-pointer"
                        >
                          GET IN TOUCH WITH US
                        </Button>
                        <Button
                          onClick={() => navigate("/category/epoxy-grout")}
                          size="sm"
                          className="bg-gray-200 text-black  px-4 py-2 rounded-lg shadow hover:bg-black hover:text-white border hover:border-orange-500 cursor-pointer"
                        >
                          View products
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JointFillersCoverage
