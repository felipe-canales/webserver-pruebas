from django.db import models


class Comic(models.Model):
    nombre = models.CharField(max_length=200)

    def __str__(self):
        return self.nombre


class Pagina(models.Model):
    comic = models.ForeignKey(Comic,
                              on_delete=models.CASCADE,
                              related_name='paginas')
    numero = models.IntegerField()
    ubicacion = models.CharField(max_length=200)

    def __str__(self):
        return "{} - {:002d}".format(self.comic.nombre, self.numero)

    @property
    def siguiente(self):
        return self.numero + 1

    @property
    def anterior(self):
        return self.numero - 1


class Adjunto(models.Model):
    VIDEO = 1
    AUDIO = 2
    pagina = models.ForeignKey(Pagina,
                               on_delete=models.CASCADE,
                               related_name='adjuntos')
    ubicacion = models.CharField(max_length=200)
    tipo = models.IntegerField()
