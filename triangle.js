//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  isEquilateral() {
    if (this.sideA == this.sideB && this.sideB == this.sideC && this.sideA>0){ 
    return true;
    }
    else {
      return false
    };
  }

  isIsosceles() {
      if (this.sideA == this.sideB || this.sideB == this.sideC || this.sideC == this.sideA && this.sideA>0 && this.sideB>0 && this.sideC>0){ 
        if (this.sideA + this.sideB > this.sideC && this.sideB + this.sideC > this.sideA && this.sideA + this.sideC > this.sideB) {
          return true;
        }
        else {
          return false;
        };
    } else {
      return false;
    }
    
  }

  isScalene() {
    if (this.sideA != this.sideB && this.sideB != this.sideA && this.sideC != this.sideA && this.sideA>0 && this.sideB>0 && this.sideC>0){
      if (this.sideA + this.sideB > this.sideC && this.sideB + this.sideC > this.sideA && this.sideA + this.sideC > this.sideB) {
        return true;
      }
      else {
        return false;
      };
    }else{
      return false;
    }
  }
  
}
