class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    if (this.creator === null) {
      return 0;
    }

    return this.creator.numberOfVampiresFromOriginal + 1;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return vampire.numberOfVampiresFromOriginal > this.numberOfVampiresFromOriginal;
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  ancestors() {
    if (this.creator === null) {
      return [this];
    }
    return this.creator.ancestors().concat([this]);
  }

  closestCommonAncestor(vampire) {

    if (vampire === this) {
      return this;
    }

    let vampireAncestors = vampire.ancestors();
    let thisAncestors = this.ancestors();

    for (let i = 0; i< Math.max(vampireAncestors.length, thisAncestors.length); i++) {
      if (!vampireAncestors[i] || !thisAncestors[i] || vampireAncestors[i] !== thisAncestors[i] ) {
        return thisAncestors[i - 1];
      }
    }
  }

}

module.exports = Vampire;

