import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const DatosFamiliar = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Familiar 1</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-2 w-full px-2">

            <div className="grid grid-cols-2 gap-6">
              <div >
                <Label htmlFor="nombre">Primer Nombre</Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="nombre"
                  required
                />
              </div>
              <div >
                <Label htmlFor="nombre">Segundo Nombre</Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="nombre"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
                <Input
                  id="apellidoPaterno"
                  type="text"
                  placeholder="apellidoPaterno"
                  required
                />
              </div>
              <div >
                <Label htmlFor="apellidoMaterno">Apellido Materno</Label>
                <Input
                  id="apellidoMaterno"
                  type="text"
                  placeholder="apellidoMaterno"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <Label htmlFor="parentesco">Parentesco</Label>
                <Input
                  id="parentesco"
                  type="text"
                  placeholder="parentesco"
                  required
                />
              </div>
              <div>
                <Label htmlFor="Edad">Edad</Label>
                <Input
                  id="Edad"
                  type="text"
                  placeholder="Edad"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="ocupacion">Ocupacion</Label>
              <Input
                id="ocupacion"
                type="text"
                placeholder="ocupacion"
                required
              />
            </div>
            <div >
              <Label htmlFor="estadoCivil">Estado Civil</Label>
              <Select>
                <SelectTrigger >
                  <SelectValue placeholder="Estado civil" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soltero">Soltero(a)</SelectItem>
                  <SelectItem value="casado">Casado(a)</SelectItem>
                  <SelectItem value="divorciado">Divorciado(a)</SelectItem>
                  <SelectItem value="viudo">Viudo(a)</SelectItem>
                  <SelectItem value="unido">Unido(a) de hecho</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="observaciones">Observaciones</Label>
              <Input
                id="observaciones"
                type="text"
                placeholder="observaciones"
                required
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default DatosFamiliar